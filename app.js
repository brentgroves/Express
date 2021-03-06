// START WITH NPM START
// https://stackoverflow.com/questions/22820162/mustache-js-escaping
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mustacheExpress = require('mustache-express');

// var router = express.Router();
//https://expressjs.com/en/starter/generator.html
var indexRouter = require('./routes/index');
var Kep13318Router = require('./routes/Kep13318');
var Plex13318Router = require('./routes/Plex13318');
// var usersRouter = require('./routes/users');
//var chatRouter = require('./routes/chat');

var app = express();


// Register '.mustache' extension with The Mustache Express
app.engine('html', mustacheExpress());

app.set('view engine', 'html');
app.set('views', __dirname + '/views');





// view engine setup
//app.set('view engine', 'mustache');
//app.set('views', __dirname + '/views');
//app.set('views', path.join(__dirname, 'views'));
//app.set('view engine', 'jade');


app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/Kep13318', Kep13318Router);
app.use('/Plex13318', Plex13318Router);

// app.use('/users', usersRouter);
//app.use('/chat',chatRouter);
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
