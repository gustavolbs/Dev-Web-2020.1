var express = require("express");

var axios = require("axios").default;
var router = express.Router();

var NotificateController = require("../controllers/NotificateController")
  .default;

router.get("/", NotificateController.index);
router.post("/", NotificateController.store);

module.exports = router;
