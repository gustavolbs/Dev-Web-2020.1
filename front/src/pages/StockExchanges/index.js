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
      isLoading: true,
      most_exchanges: {},
      most_negotiated: {},
      quantity: null
    };
    this.reloadData = this.reloadData.bind(this);
  }

  async componentDidMount() {
    this.reloadData();
    setInterval(this.reloadData, 1000);
  }

  async reloadData() {
    const response = await api.get("/exchanges");

    this.setState({
      most_exchanges: response.data.most_exchanges,
      most_negotiated: response.data.most_negotiated,
      isLoading: false
    });
  }

  handleInputChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

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
            <input
              name="quantity"
              type="number"
              min="1"
              placeholder="Insira uma quantia..."
              onChange={this.handleInputChange}
            />
          </div>

          <br />
          <h2>Maiores Altas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.most_exchanges
                ? Object.keys(
                    this.state.most_exchanges["SctyHghstIncrLst"]
                  ).map(mostExchange => {
                    return (
                      <Card
                        highExchange={
                          this.state.most_exchanges["SctyHghstIncrLst"][
                            mostExchange
                          ]
                        }
                        time={this.state.most_exchanges["Msg"]["dtTm"]}
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
          <h2>Maiores Baixas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.most_exchanges
                ? Object.keys(this.state.most_exchanges["SctyHghstDrpLst"]).map(
                    mostExchange => {
                      return (
                        <Card
                          lowExchange={
                            this.state.most_exchanges["SctyHghstDrpLst"][
                              mostExchange
                            ]
                          }
                          time={this.state.most_exchanges["Msg"]["dtTm"]}
                          quantity={this.state.quantity}
                        />
                      );
                    }
                  )
                : "Ocorreu um erro, tente novamente mais tarde"}
            </CardList>
          )}

          <br />
          <br />
          <br />
          <br />
          <h2>Ações mais Negociadas</h2>
          {this.state.isLoading ? (
            <Spinner />
          ) : (
            <CardList>
              {this.state.most_negotiated
                ? Object.keys(this.state.most_negotiated["Volume"]).map(
                    mostNegotiated => {
                      return (
                        <Card
                          negotiated={
                            this.state.most_negotiated["Volume"][mostNegotiated]
                          }
                          time={this.state.most_negotiated["Msg"]["dtTm"]}
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
