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
    button: {
      fontSize: 12,
      fontWeight: "600",
      color: `${colors.textPrimary}`
    },
    pos: {
      marginBottom: 12,
      color: `${
        props.currency && props.currency.pctChange > 0
          ? colors.goUp
          : colors.goDown
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
            : `${props.stocks.name}`}
        </Typography>
        {props.stocks && (
          <Typography className={classes.title} gutterBottom>
            {props.stocks.location}
          </Typography>
        )}
        <Typography variant="h5" component="h2">
          {props.currency
            ? `${props.currency.ask}`
            : props.stocks.points
            ? props.stocks.points
            : "Valor não informado"}
        </Typography>
        <Typography className={classes.pos}>
          {props.currency
            ? props.currency.pctChange + "%"
            : props.stocks.variation + "%"}
        </Typography>
        <Typography variant="body2" component="p">
          {props.currency
            ? `Atualizado em: ${props.currency.create_date}`
            : `Atualizado em: ${props.stocks.create_date}`}

          <br />
        </Typography>
      </CardContent>
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
    </Card>
  );
}
