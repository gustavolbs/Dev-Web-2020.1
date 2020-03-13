import React, { Component } from "react";

import api from "../../services/Api";

import Header from "../../components/Header";
import Card from "../../components/Card";
import Spinner from "../../components/Spinner";

import { Container, CardList } from "./styles";

export default class StockExchanges extends Component {
  constructor() {
    super();
    this.state = {
      isLoading: true
    };
    this.reloadData = this.reloadData.bind(this);
  }

  async componentDidMount() {
    this.reloadData();
    setInterval(this.reloadData, 30000);
  }

  async reloadData() {
    // const response = await api.get("/all");

    this.setState({
      // currencies: response.data.currencies,
      // stocks: response.data.stocks,
      isLoading: false
    });
  }

  render() {
    return (
      <Container>
        <Header title={"Ações"} />
        <br />
        <span>Acompanhe os valores das ações da Bovespa em tempo real</span>

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
            <input type="text" />
            <button>pesquisar ação</button>
          </div>

          <br />
          <h2>Ações selecionadas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.stockExchanges
                ? Object.keys(this.state.stockExchanges).map(stockExchange => {
                    return (
                      <Card
                        currency={this.state.stockExchanges[stockExchange]}
                      />
                    );
                  })
                : "Ocorreu um erro, tente novamente mais tarde"}
            </CardList>
          )}
        </div>
      </Container>
    );
  }
}
