var express = require("express");
var axios = require("axios").default;
var router = express.Router();
var timeConverter = require("../utils/timestampConverter");

router.get("/", async function(req, res, next) {
  const response = {
    exchanges: {
      Msg: { dtTm: timeConverter() },
      SctyHghstIncrLst: []
    }
  };

  var exchanges_to_await = [
    { id: 67, symb: "BBAS3", desc: "Banco do Brasil SA" },
    { id: 68, symb: "BBDC3", desc: "Banco Bradesco SA" },
    { id: 69, symb: "BBDC4", desc: "Banco Bradesco SA Preference Shares" },
    { id: 123, symb: "VIVT4", desc: "Telefônica Brasil" },
    { id: 159, symb: "CCRO3", desc: "Grupo CCR" },
    { id: 287, symb: "EQTL3", desc: "Equatorial Energia" },
    { id: 332, symb: "GOLL4", desc: "Gol Linhas Aéreas" },
    { id: 377, symb: "ITSA3", desc: "Itausa Investimentos Itau SA" },
    { id: 381, symb: "JBSS3", desc: "JBS" },
    { id: 416, symb: "LREN3", desc: "Lojas Renner" },
    {
      id: 484,
      symb: "PETR4",
      desc: "Petroleo Brasileiro SA Petrobras Preference Shares"
    },
    { id: 601, symb: "SUZB3", desc: "Suzano SA" },
    { id: 704, symb: "WEGE3", desc: "WEG S.A." },
    { id: 775, symb: "VALE3", desc: "Vale S.A." },
    { id: 884, symb: "ITUB4", desc: "Itaú Unibanco" },
    { id: 1183, symb: "MGLU3", desc: "Magazine Luiza" },
    { id: 1257, symb: "RADL3", desc: "RaiaDrogasil" },
    { id: 1427, symb: "BBSE3", desc: "BB Seguridade" },
    { id: 1545, symb: "ABEV3", desc: "AMBEV" },
    { id: 1877, symb: "RAIL3", desc: "Rumo SA" },
    { id: 1881, symb: "AZUL4", desc: "Azul SA" },
    {
      id: 1981,
      symb: "GNDI3",
      desc: "Notre Dame Intermedica Participacoes SA"
    },
    { id: 1978, symb: "BBDC4", desc: "B3 SA - Brasil Bolsa Balcao" }
  ];

  let promises = exchanges_to_await.map(async exchange => {
    return axios
      .get(
        `https://api.cotacoes.uol.com/asset/intraday/list/?format=JSON&fields=price,pctChange,date&item=${exchange.id}&`
      )
      .then(function(await_response) {
        var exchange_done = {
          symb: exchange.symb,
          desc: exchange.desc,
          SctyQtn: {
            curPrc: await_response.data.docs[0].price,
            prcFlcn: await_response.data.docs[0].pctChange
          }
        };
        response["exchanges"]["SctyHghstIncrLst"].push(exchange_done);
      })
      .catch(function(error) {
        response["exchangesError"] = error;
      });
  });
  Promise.all(promises).then(function(values) {
    response["exchanges"]["SctyHghstIncrLst"].sort((a, b) =>
      a.desc > b.desc ? 1 : -1
    );

    res.send(response);
  });
});

module.exports = router;
