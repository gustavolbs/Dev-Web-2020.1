import React, { Component } from "react";

import api from "../../services/Api";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

import { Container, CardList } from "./styles";

export default class BovespaExchanges extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true,
      exchanges: {},
      quantity: null,
      handleInterval: null
    };
    this.reloadData = this.reloadData.bind(this);
  }

  async componentWillUnmount() {
    clearInterval(this.state.handleInterval);
  }

  async componentDidMount() {
    this.reloadData();
    var handleInterval = setInterval(this.reloadData, 1000);

    this.setState({ handleInterval });
  }

  async reloadData() {
    const response = await api.get("/bovespa");

    this.setState({
      exchanges: response.data.exchanges,
      isLoading: false
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Header
          title={"Ações Mais Relevantes"}
          description={
            "Acompanhe os valores das ações mais relevantes da Bovespa em tempo real"
          }
          handleInputChange={this.handleInputChange}
        />

        <div>
          <br />
          <h2>Mais Relevantes</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.exchanges
                ? Object.keys(this.state.exchanges["SctyHghstIncrLst"]).map(
                    mostExchange => {
                      return (
                        <Card
                          highExchange={
                            this.state.exchanges["SctyHghstIncrLst"][
                              mostExchange
                            ]
                          }
                          time={this.state.exchanges["Msg"]["dtTm"]}
                          quantity={this.state.quantity}
                        />
                      );
                    }
                  )
                : "Ocorreu um erro, tente novamente mais tarde"}
            </CardList>
          )}
        </div>
      </Container>
    );
  }
}
