require("./mongo");
require("dotenv").config();

const createError = require("http-errors");
const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require("cors");
const routes = require("./routes/index.js");
var jwt = require("express-jwt");
var jwks = require("jwks-rsa");

const Experiencia = require("./models/Experiencias");
const indexRouter = require("./routes/index");
const usersRouter = require("./routes/users");

const { renderHomeApi } = require("./controllers/home");

// Config Auth0

var unprotected = [/\/products*/, /favicon.ico/, /\/places*/, /\/api/];

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

// Config
const app = express();

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

//Auth 0

app.use(jwtVerify);
app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", ["*"]);
  res.setHeader("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// Routes //
app.get("/api", (req, res, next) => {
  res.render("index", { title: "API PARKWAY" });
});

app.use("/", routes);

// Middlewares //

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
