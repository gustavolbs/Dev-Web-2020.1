var express = require("express");
var axios = require("axios").default;
var router = express.Router();
const { curly } = require('node-libcurl');
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

  console.log("Done 1")
  // Get Most Stocks Exchanges
  try {
    let most_exchanges = await axios.get(
      `http://cotacao.b3.com.br/mds/api/v1/InstrumentPriceFluctuation/ibov`
    );
    
    response["most_exchanges"] = most_exchanges.data;
  } catch (error) {
    response["most_exchangesError"] = error;
    console.log(error);
  }
  console.log("Done 2")
  
  try {
    let most_negotiated = await axios.get(
      `http://cotacao.b3.com.br/mds/api/v1/InstrumentTradeVolume/vista`
    );
    
    response["most_negotiated"] = most_negotiated.data;
  } catch (error) {
    response["most_negotiatedError"] = error;
    console.log(error);
  }
  console.log("Done 3")
  

  
  try {
    const bovespa = await axios.get(
      "https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=1"
    );

    response["bovespa"] = bovespa.data;
  } catch (error) {
    response["bovespaError"] = error;
    console.log(error);
  }
  console.log("Done 4")
        
        
        
  res.send(response);
});
      
module.exports = router;
