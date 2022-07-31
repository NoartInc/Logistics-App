var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors');
var multer = require('multer');
var bodyParser = require('body-parser');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var kendaraanRouter = require('./routes/kendaraan');
var teliRouter = require('./routes/teli');
var customerRouter = require('./routes/customer');
var pengangkutanRouter = require('./routes/pengangkutan');
var pengirimanRouter = require('./routes/pengiriman');
var authRouter = require('./routes/auth');


var app = express();
app.use(cors())

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/kendaraan', kendaraanRouter);
app.use('/teli', teliRouter);
app.use('/customer', customerRouter);
app.use('/pengangkutan', pengangkutanRouter);
app.use('/pengiriman', pengirimanRouter);
app.use('/auth', authRouter);

// determining upload location
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, './public/images');
  },
  filename: function (req, file, callback) {
    callback(
      null,
      path.parse(file.originalname).name + "-" + Date.now() + path.extname(file.originalname)
    );
  },
});

const upload = multer({ storage })

app.post('/upload', upload.single('photo'), (req, res) => {
  //membuat url gambar dan save ke db
  let finalImageURL = req.protocol + '://' + req.get('host') + '/uploads' + req.file.filename;
  res.json({status: 'uploaded successfully', image: finalImageURL});
})


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
