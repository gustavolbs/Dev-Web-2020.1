import React, { Component } from "react";

import api from "../../services/Api";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

import { Container, CardList } from "./styles";

export default class Main extends Component {
  constructor() {
    super();
    this.state = {
      currencies: {},
      stocks: {},
      isLoading: true,
      quantity: null
    };
    this.reloadData = this.reloadData.bind(this);
  }

  async componentDidMount() {
    this.reloadData();
    setInterval(this.reloadData, 1000);
  }

  async reloadData() {
    const response = await api.get("/home");

    this.setState({
      currencies: response.data.currencies,
      stocks: response.data.stocks,
      isLoading: false
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    return (
      <Container>
        <Header title={"Home"} />
        <br />
        <span>
          Acompanhe os valores das moedas e bolsa de valores ao redor do mundo
          em tempo real
        </span>

        <br />
        <br />
        <span style={{ color: "red", fontWeight: "bold" }}>
          Exoneração de responsabilidade: Os dados apresentados aqui são
          aproximações dos valores reais. Nenhum dado apresentado aqui deve ser
          tomado como valor 100% correto. Podem haver leves variações. Todos os
          valores apresentados aqui consideram as conversões em BRL.
        </span>
        <br />
        <br />

        <div>
          <div>
            <input
              name="quantity"
              type="number"
              min="1"
              placeholder="Insira uma quantia..."
              onChange={this.handleInputChange}
            />
          </div>

          <br />
          <h2>Moedas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.currencies
                ? Object.keys(this.state.currencies).map(currencyKey => {
                    return (
                      <Card
                        currency={this.state.currencies[currencyKey]}
                        quantity={this.state.quantity}
                      />
                    );
                  })
                : "Ocorreu um erro, tente novamente mais tarde"}
            </CardList>
          )}

          <br />
          <br />
          <br />
          <br />
          <h2>Bolsas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.stocks
                ? Object.keys(this.state.stocks).map(stocksKey => {
                    return <Card stocks={this.state.stocks[stocksKey]} />;
                  })
                : "Ocorreu um erro, tente novamente mais tarde"}
            </CardList>
          )}
        </div>
      </Container>
    );
  }
}
