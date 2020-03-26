import React, { Component } from "react";

import api from "../../services/Api";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

import { Container, CardList } from "./styles";

export default class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currencies: {},
      stocks: {},
      isLoading: true,
      quantity: null,
      handleInterval: null
    };
    this.reloadData = this.reloadData.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
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
    const currencies = await api.get("/home");
    this.setState({
      currencies: currencies.data.currencies,
      isLoading: false
    });

    const stocks = await api.get("/home/stocks");
    console.log(stocks.data.stocks);
    this.setState({
      stocks: stocks.data.stocks,
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
          title={"Home"}
          description={
            "Acompanhe os valores das moedas e bolsa de valores ao redor do mundo em tempo real"
          }
          handleInputChange={this.handleInputChange}
        />

        <div>
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
