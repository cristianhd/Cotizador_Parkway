require("./mongo")
require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const { auth } = require('express-openid-connect');
const { requiresAuth } = require('express-openid-connect');

// config Auth0
const config = {
  authRequired: false,
  auth0Logout: true,
  secret: process.env.SECRET,
  baseURL: process.env.BASEURL,
  clientID: process.env.CLIENTID,
  issuerBaseURL: process.env.ISSUER
};

const Experiencia = require("./models/Experiencias")
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');

// Config //
const app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

//Auth 0

app.use(auth(config));

// Routes //

app.get("/",(req,res,next)=>{
  res.send(req.oidc.isAuthenticated() ? 'Logged in' : 'Logged out');
})
app.get('/profile', requiresAuth(), (req, res) => {
  res.send(JSON.stringify(req.oidc.user));
});

app.get("/api/experiencias", (req,res,next)=>{
  Experiencia.find().then(Experiencias=>{
    res.json(Experiencias)
  })
})

app.post("/api/experiencias", (req,res,next)=>{

  const experiencias = req.body
 

 Experiencia.insertMany(experiencias).then(result => {
    res.json(result)
  })
})
// Middlewares //

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
