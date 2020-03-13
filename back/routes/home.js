var express = require("express");
var axios = require("axios").default;
var router = express.Router();
var timeConverter = require("../utils/timestampConverter");

router.get("/", async function(req, res, next) {
  var response = {
    stocks: {}
  };

  try {
    const currencies = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );

    response["currencies"] = currencies.data;
  } catch (error) {
    response["currencyError"] = error;
  }

  try {
    const bovespa = await axios.get(
      "https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=1"
    );
    const cac40 = await axios.get(
      "https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=17"
    );

    response["stocks"]["IBOVESPA"] = {
      name: "BM&F BOVESPA",
      location: "Sao Paulo, Brazil",
      points: bovespa.data.docs[0].price,
      variation: bovespa.data.docs[0].pctChange,
      create_date: timeConverter()
    };
    response["stocks"]["CAC"] = {
      name: "CAC 40",
      location: "Paris, French",
      points: cac40.data.docs[0].price,
      variation: cac40.data.docs[0].pctChange,
      create_date: timeConverter()
    };
  } catch (error) {
    response["stocksError"] = error;
  }

  res.send(response);
});

module.exports = router;
