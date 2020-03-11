var express = require("express");
var axios = require("axios").default;
var router = express.Router();

/* GET home page. */
// router.get("/", function(req, res, next) {
//   res.send({ message: "respond with a resource" });
// });

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
    console.log(error);
  }

  // Get Stocks
  try {
    const stocks = await axios.get("https://api.hgbrasil.com/finance");

    response["stocks"] = stocks.data.results.stocks;
  } catch (error) {
    console.log(error);
  }

  res.send(response);
});

module.exports = router;
