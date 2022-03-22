require("./mongo")
require('dotenv').config()

const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const cors = require("cors")
const routes = require('./routes/index.js');
var jwt = require('express-jwt');
var jwks = require('jwks-rsa');

const Experiencia = require("./models/Experiencias")
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const { default: axios } = require("axios");
const { renderHomeApi } = require("./controllers/home");

// Config Auth0
const jwtVerify = jwt({
  secret: jwks.expressJwtSecret({
      cache: true,
      rateLimit: true,
      jwksRequestsPerMinute: 5,
      jwksUri: 'https://dev-ascvuavf.us.auth0.com/.well-known/jwks.json'
}),
audience: 'https:/www.cotizador-api.com',
issuer: 'https://dev-ascvuavf.us.auth0.com/',
algorithms: ['RS256']
}).unless({path:["/","/api/product"]})

// Config 
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


// app.use(jwtVerify);

// Routes //
app.use("/",routes)

// app.get("/",(req,res,next)=>{
//   res.render('index', { title: 'API PARKWAY' });
// })
// app.get('/protected', async (req, res) => {
  
//   try {

//     const accessToken = req.headers.authorization.split(" ")[1];
//     const response = await axios.get("https://dev-ascvuavf.us.auth0.com/userinfo",{
//       headers: {
//         authorization: `Bearer ${accessToken}`
//       }
//     })    
    
//     const infoUser = response.data;
//     console.log(infoUser)
//     console.log(accessToken);
//     res.send(infoUser)
    
//   } catch (error) {
//     res.send(error.message)
//   }
// });

// app.get("/api/product/:type", (req,res,next)=>{
//   const typeProduct = req.params.type;
//   Experiencia.find().then(Experiencias=>{
//     res.json(Experiencias)
//   })
// })

// app.post("/api/experiencias", (req,res,next)=>{

//   const experiencias = req.body;
 

//  Experiencia.insertMany(experiencias).then(result => {
//     res.json(result)
//   })
// })
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
