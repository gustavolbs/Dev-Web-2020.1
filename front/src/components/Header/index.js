import React from "react";

import { Container } from "./styles";

export default function Header({ title }) {
  return (
    <Container>
      <h1>{title}</h1>
    </Container>
  );
}
