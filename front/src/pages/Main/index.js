import React, { Component } from "react";

import Header from "../../components/Header";

import { Container } from "./styles";

export default class Main extends Component {
  render() {
    return (
      <Container>
        <Header title={"Main"} />
      </Container>
    );
  }
}
