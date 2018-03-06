var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

var index = require('./routes/index');
var users = require('./routes/users');
var upload = require('./routes/upload');
var message = require('./routes/message');
var kind = require('./routes/kind');
var hr = require('./routes/hr');
var internet = require('./routes/internet');
var about = require('./routes/about');
var admin = require('./routes/admin');
var news = require('./routes/news');
var brand = require('./routes/brand');
var intmarket = require('./routes/intmarket');
var xlsx = require('./routes/xlsx');
var products = require('./routes/products');
var mongoose = require('mongoose');
var app = express();
var cors = require('cors');
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
mongoose.connect('mongodb://localhost/test', { useMongoClient: true });
// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));


app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.static(path.join(__dirname, 'upload')));
app.use(cors())
app.use('/', index);
app.use('/users', users);
app.use('/upload', upload);
app.use('/kind', kind);
app.use('/message', message);
app.use('/hr', hr);
app.use('/about', about);
app.use('/internet', internet);
app.use('/news', news);
app.use('/admin', admin);
app.use('/xlsx', xlsx);
app.use('/brand', brand)
app.use('/intmarket', intmarket)
app.use('/products', products);
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
