import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";

import { shade } from "polished";
import { ThemeContext } from "styled-components";

export default function SimpleCard(props) {
  const { colors, title } = useContext(ThemeContext);
  const [display, setDisplay] = useState(true);

  const useStyles = makeStyles({
    root: {
      margin: "10px 5px 0",
      background: `${shade(0.1, colors.backgroundPrimary)}`,
      color: `${colors.textPrimary}`,
      "&:hover": {
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 5px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;"
      }
    },
    bullet: {
      display: "inline-block",
      margin: "0 2px",
      transform: "scale(0.8)"
    },
    title: {
      fontSize: 14,
      color: `${colors.textPrimary}`
    },
    subtitle: {
      fontSize: 12
    },
    button: {
      fontSize: 12,
      fontWeight: "600",
      color: `${colors.textPrimary}`
    },
    pos: {
      marginBottom: 14,
      color: `${
        props.currency
          ? props.currency.pctChange > 0
            ? colors.goUp
            : props.currency.pctChange < 0
            ? colors.goDown
            : colors.notInformed
          : props.stocks
          ? parseInt(props.stocks.variation) > 0
            ? colors.goUp
            : parseInt(props.stocks.variation) < 0
            ? colors.goDown
            : colors.notInformed
          : props.highExchange
          ? parseInt(props.highExchange.SctyQtn.prcFlcn) > 0
            ? colors.goUp
            : parseInt(props.highExchange.SctyQtn.prcFlcn) < 0
            ? colors.goDown
            : colors.notInformed
          : props.lowExchange
          ? parseInt(props.lowExchange.SctyQtn.prcFlcn) > 0
            ? colors.goUp
            : parseInt(props.lowExchange.SctyQtn.prcFlcn) < 0
            ? colors.goDown
            : colors.notInformed
          : props.negotiated
          ? colors.notInformed
          : colors.notInformed
      }`
    }
  });

  const classes = useStyles();

  if (!display) {
    return null;
  }

  return (
    <Card className={classes.root}>
      <CardContent>
        <Typography className={classes.title} gutterBottom>
          {props.currency
            ? `${props.currency.code} - ${props.currency.name}`
            : props.stocks
            ? `${props.stocks.name}`
            : props.highExchange
            ? `${props.highExchange.symb}`
            : props.lowExchange
            ? `${props.lowExchange.symb}`
            : props.negotiated && `${props.negotiated.scty.symb}`}
        </Typography>

        {props.stocks && (
          <Typography className={classes.subtitle} gutterBottom>
            {props.stocks.location}
          </Typography>
        )}

        {(props.highExchange || props.lowExchange || props.negotiated) && (
          <Typography className={classes.subtitle} gutterBottom>
            {props.highExchange
              ? props.highExchange.desc
              : props.lowExchange
              ? props.lowExchange.desc
              : props.negotiated && props.negotiated.scty.desc}
          </Typography>
        )}

        <div>
          <Typography variant="h5" component="h2">
            {props.currency
              ? `R$ ${(
                  props.currency.ask * (props.quantity ? props.quantity : 1)
                ).toFixed(2)}`
              : props.stocks
              ? `${props.stocks.points}`
              : props.highExchange
              ? `R$ ${(
                  props.highExchange.SctyQtn.curPrc *
                  (props.quantity ? props.quantity : 1)
                ).toFixed(2)}`
              : props.lowExchange
              ? `R$${(
                  props.lowExchange.SctyQtn.curPrc *
                  (props.quantity ? props.quantity : 1)
                ).toFixed(2)}`
              : props.negotiated
              ? `R$ ${(
                  props.negotiated.pricVal *
                  (props.quantity ? props.quantity : 1)
                ).toFixed(2)}`
              : "Valor não informado"}
          </Typography>

          <Typography className={classes.pos}>
            {props.currency
              ? `${props.currency.pctChange}%`
              : props.stocks
              ? `${props.stocks.variation.toFixed(2)}%`
              : props.highExchange
              ? `${props.highExchange.SctyQtn.prcFlcn.toFixed(2)}%`
              : props.lowExchange
              ? `${props.lowExchange.SctyQtn.prcFlcn.toFixed(2)}%`
              : props.negotiated
              ? "Valor não informado"
              : "Valor não informado"}
          </Typography>
        </div>

        <Typography variant="body2" component="p">
          {props.time
            ? `Atualizado em: ${props.time}`
            : props.currency
            ? `Atualizado em: ${props.currency.create_date}`
            : props.stocks && `Atualizado em: ${props.stocks.create_date}`}
        </Typography>
        <CardActions>
          <Button
            onClick={() => {
              setDisplay(false);
            }}
            className={classes.button}
            size="small"
          >
            Não exibir
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
}
