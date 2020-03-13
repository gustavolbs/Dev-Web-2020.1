var express = require("express");
var axios = require("axios").default;
var router = express.Router();
var getPercentageChange = require("../utils/getPercentageChange");

// Get Everything
router.get("/", async function(req, res, next) {
  var response = {};

  // Get currencies and cryptocoins
  try {
    const currencies = await axios.get(
      "https://economia.awesomeapi.com.br/json/all"
    );

    response["currencies"] = currencies.data;
  } catch (error) {
    response["currencyError"] = error;
    console.log(error);
  }

  // Get Stocks
  try {
    let stocks = ["^BVSP", "NSE", "BOVV11.SAO"];
    let stock = await axios.get(
      "https://www.alphavantage.co/query?function=GLOBAL_QUOTE&symbol=^BVSP&apikey=QUDEF4MP6X9LP713"
    );

    response["stocks"] = {
      // "name": stock.data["Global Quote"]["01. symbol"],
      // "location": stock.data["Global Quote"]["01. symbol"],
      symbol: stock.data["Global Quote"]["01. symbol"],
      points: stock.data["Global Quote"]["05. price"],
      variation: stock.data["Global Quote"]["10. change percent"]
    };
  } catch (error) {
    response["stockError"] = error;
  }

  // try {
  //   const stocks = await axios.get("https://api.hgbrasil.com/finance");
  //   var date = new Date();

  //   response["stocks"] = stocks.data.results.stocks;
  //   console.log(response["stocks"]);

  //   Object.keys(response["stocks"]).map(stock => {
  //     response["stocks"][stock]["create_date"] = `${date
  //       .toTimeString()
  //       .split(" ")[0]
  //       .trim()} ${date.toLocaleDateString()}`;
  //   });
  // } catch (error) {
  //   response["stockError"] = error;
  //   console.log(error);
  // }

  res.send(response);
});

module.exports = router;
