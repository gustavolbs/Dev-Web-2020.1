import React, { useContext, useState } from "react";
import Input from "@material-ui/core/Input";
import { ThemeContext } from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { shade } from "polished";

import SendEmailModal from "../SendEmailModal";

import { Container } from "./styles";

export default function Header({ title, description, handleInputChange }) {
  const { colors } = useContext(ThemeContext);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      "label + &": {
        marginTop: theme.spacing(3),
        color: `${colors.textPrimary}`
      }
    },
    input: {
      color: `${colors.textPrimary}`,
      borderRadius: 4,
      position: "relative",
      background: `${shade(0.2, colors.backgroundPrimary)}`,
      // border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    },
    modalInput: {
      display: "flex",
      flexDirection: "row",
      width: "100%",
      alignItems: "center"
    }
  }));

  const classes = useStyles();

  return (
    <Container>
      <h1>{title}</h1>
      <br />
      <span>{description}</span>

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
      <div className={classes.modalInput}>
        <SendEmailModal />
        <Input
          name="quantity"
          type="number"
          min="1"
          placeholder="Insira uma quantia..."
          onChange={handleInputChange}
          className={classes.input}
        />
      </div>
    </Container>
  );
}
