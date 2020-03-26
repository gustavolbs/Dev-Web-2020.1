var express = require("express");
var axios = require("axios").default;
var router = express.Router();
var timeConverter = require("../utils/timestampConverter");

router.get("/", async function(req, res, next) {
  var response = {};

  try {
    const currencies = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );

    response["currencies"] = currencies.data;
  } catch (error) {
    response["currencyError"] = error;
  }
  res.send(response);
});

router.get("/stocks", async function(req, res, next) {
  const response = {
    stocks: []
  };

  var stocks_to_await = [
    { id: 1, name: "BM&F BOVESPA", location: "Sao Paulo, Brazil" },
    { id: 17, name: "CAC 40", location: "Paris, French" }
  ];

  let promises = stocks_to_await.map(async stock => {
    return axios
      .get(
        `https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=${stock.id}&`
      )
      .then(function(await_response) {
        var stock_done = {
          name: stock.name,
          location: stock.location,
          points: await_response.data.docs[0].price,
          variation: await_response.data.docs[0].pctChange,
          create_date: timeConverter()
        };
        response["stocks"].push(stock_done);
      })
      .catch(function(error) {
        response["stocksError"] = error;
      });
  });
  Promise.all(promises).then(function(values) {
    response["stocks"].sort((a, b) => (a.name > b.name ? 1 : -1));

    res.send(response);
  });
});

module.exports = router;
