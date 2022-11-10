require("./mongo");
require("dotenv").config();
const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
const jwt = require("express-jwt");
const jwks = require("jwks-rsa");

// config Auth0

const unprotected = [/\/products*/, /favicon.ico/, /\/places*/,/\/cities*/, /\/api/];

const jwtVerify = jwt({
  secret: jwks.expressJwtSecret({
    cache: true,
    rateLimit: true,
    jwksRequestsPerMinute: 5,
    jwksUri: "https://dev-ascvuavf.us.auth0.com/.well-known/jwks.json",
  }),
  audience: "https:/www.cotizador-api.com",
  issuer: "https://dev-ascvuavf.us.auth0.com/",
  algorithms: ["RS256"],
}).unless({ path: unprotected });

// config server
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// middlewares
app.use(cors());
app.use(logger("dev"));
app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(jwtVerify);

// routes
app.get("/api", (req, res, next) => {
  res.render("index", { title: "API PARKWAY" });
});

app.use("/", routes);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;