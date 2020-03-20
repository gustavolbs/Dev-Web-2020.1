import React, { useContext, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import Button from "@material-ui/core/Button";
import Input from "@material-ui/core/Input";
import { ThemeContext } from "styled-components";
import { shade } from "polished";
import api from "../../services/Api";

export default function CustomizedSelects() {
  const { colors, title } = useContext(ThemeContext);

  const useStyles = makeStyles(theme => ({
    margin: {
      margin: theme.spacing(1),
      "label + &": {
        marginTop: theme.spacing(3),
        color: `${colors.textPrimary}`
      }
    },
    button: {
      fontSize: 12,
      fontWeight: "600",
      background: `${shade(0.2, colors.backgroundPrimary)}`,
      margin: theme.spacing(1),
      marginTop: theme.spacing(3),
      padding: "10px 12px 10px 12px",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      color: `${colors.textPrimary}`,
      "&:hover": {
        boxShadow:
          "rgba(0, 0, 0, 0.2) 0px 3px 3px -2px, rgba(0, 0, 0, 0.14) 0px 3px 4px 5px, rgba(0, 0, 0, 0.12) 0px 1px 8px 0px;"
      }
    },
    input: {
      color: `${colors.textPrimary}`,
      borderRadius: 4,
      position: "relative",
      background: `${shade(0.2, colors.backgroundPrimary)}`,
      border: "1px solid #ced4da",
      fontSize: 16,
      padding: "10px 26px 10px 12px",
      transition: theme.transitions.create(["border-color", "box-shadow"]),
      "&:focus": {
        borderRadius: 4,
        borderColor: "#80bdff",
        boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)"
      }
    }
  }));

  const classes = useStyles();
  const [email, setEmail] = React.useState("");
  const [value, setValue] = React.useState("");
  const [currency, setCurrency] = React.useState("");

  const handleSubmit = async e => {
    e.preventDefault();

    try {
      await api.post(`/notifications`, {
        email,
        value,
        currency
      });
      // window.location.reload();
    } catch (err) {
      console.log("Something went Wrong");
    } finally {
      console.log("OK");
    }
  };

  return (
    <div>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Email</InputLabel>
        <Input
          className={classes.input}
          value={email}
          name="email"
          placeholder="Digite seu email..."
          type="email"
          onChange={e => setEmail(`${e.target.value}`)}
          id="demo-customized-textbox"
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel htmlFor="demo-customized-textbox">Valor</InputLabel>
        <Input
          className={classes.input}
          value={value}
          name="value"
          type="number"
          onChange={e => setValue(`${e.target.value}`)}
          min="0"
          step="0.01"
          placeholder="R$ 1.80 (não digite o símbolo da moeda)"
          id="demo-customized-textbox"
        />
      </FormControl>
      <FormControl className={classes.margin}>
        <InputLabel>Moeda</InputLabel>
        <Select
          id="demo-customized-select"
          value={currency}
          name="currency"
          onChange={e => setCurrency(`${e.target.value}`)}
          input={<Input />}
          className={classes.input}
        >
          <MenuItem value="">
            <em>None</em>
          </MenuItem>
          <MenuItem value={"AUD"}>Dólar Australiano</MenuItem>
          <MenuItem value={"CAD"}>Dólar Canadense</MenuItem>
          <MenuItem value={"USD"}>Dólar Comercial</MenuItem>
          <MenuItem value={"USDT"}>Dólar Turismo</MenuItem>
          <MenuItem value={"EUR"}>Euro</MenuItem>
          <MenuItem value={"CHF"}>Franco Suíço</MenuItem>
          <MenuItem value={"JPY"}>Iene Japonês</MenuItem>
          <MenuItem value={"GBP"}>Libra Esterlina</MenuItem>
          <MenuItem value={"ILS"}>Novo Shekel Israelense</MenuItem>
          <MenuItem value={"ARS"}>Peso Argentino</MenuItem>
          <MenuItem value={"CNY"}>Yuan Chinês</MenuItem>

          <MenuItem value={"BTC"}>Bitcoin</MenuItem>
          <MenuItem value={"LTC"}>Litecoin</MenuItem>
          <MenuItem value={"ETH"}>Ethereum</MenuItem>
          <MenuItem value={"XRP"}>Ripple</MenuItem>
        </Select>
      </FormControl>
      <FormControl className={classes.margin}>
        <Button onClick={handleSubmit} className={classes.button} size="small">
          ENVIAR!
        </Button>
      </FormControl>
    </div>
  );
}
