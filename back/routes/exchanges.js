var express = require("express");
var axios = require("axios").default;
var router = express.Router();

router.get("/", async function(req, res, next) {
  const response = {};

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

  res.send(response);
});

module.exports = router;
