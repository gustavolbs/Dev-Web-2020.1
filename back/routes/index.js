var express = require("express");
var axios = require("axios").default;
var router = express.Router();
var timeConverter = require("../utils/timestampConverter");


// Get Everything
router.get("/", async function (req, res, next) {
  var response = {
    "stocks": {}
  };

  // Get currencies and cryptocoins
  try {
    const currencies = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );

    response["currencies"] = currencies.data;
  } catch (error) {
    response["currencyError"] = error;
  }

  // Get Most Stocks Exchanges
  try {
    let most_exchanges = await axios.get(
      `http://cotacao.b3.com.br/mds/api/v1/InstrumentPriceFluctuation/ibov`
    );

    response["most_exchanges"] = most_exchanges.data;
  } catch (error) {
    response["most_exchangesError"] = error;
  }

  try {
    let most_negotiated = await axios.get(
      `http://cotacao.b3.com.br/mds/api/v1/InstrumentTradeVolume/vista`
    );

    response["most_negotiated"] = most_negotiated.data;
  } catch (error) {
    response["most_negotiatedError"] = error;
  }

  try {
    const bovespa = await axios.get(
      "https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=1"
    );
    const cac40 = await axios.get(
      "https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=17"
    );

    response["stocks"]["IBOVESPA"] = {
      "name": "BM&F BOVESPA",
      "location": "Sao Paulo, Brazil",
      "points": bovespa.data.docs[0].price,
      "variation": bovespa.data.docs[0].pctChange,
      "create_date": timeConverter(),
    };
    response["stocks"]["CAC"] = {
      "name": "CAC 40",
      "location": "Paris, French",
      "points": cac40.data.docs[0].price,
      "variation": cac40.data.docs[0].pctChange,
      "create_date": timeConverter(),
    };

  } catch (error) {
    response["stocksError"] = error;
  }

  res.send(response);
});

module.exports = router;
