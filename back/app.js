var express = require("express");
require = require("esm")(module /*, options*/);
const cors = require("cors");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var sendEmails = require("./utils/sendEmail");

var homeRouter = require("./routes/home");
var exchangesRouter = require("./routes/exchanges");
var bovespaExchangesRouter = require("./routes/bovespaExchanges");
var notificationsRouter = require("./routes/notifications");

var app = express();

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

app.use("/home", homeRouter);
app.use("/exchanges", exchangesRouter);
app.use("/bovespa", bovespaExchangesRouter);
app.use("/notifications", notificationsRouter);

module.exports = app;
