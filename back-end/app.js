var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");
var cors = require("cors");
var multer = require("multer");
var bodyParser = require("body-parser");

var app = express();
app.use(cors());

// view engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
var kendaraanRouter = require("./routes/kendaraan");
var teliRouter = require("./routes/teli");
var produksiRouter = require("./routes/produksi");
var customerRouter = require("./routes/customer");
var pengangkutanRouter = require("./routes/pengangkutan");
var pengirimanRouter = require("./routes/pengiriman");
var authRouter = require("./routes/auth");
var gradingRouter = require("./routes/grading");
const { Master } = require("./models");

app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/kendaraan", kendaraanRouter);
app.use("/teli", teliRouter);
app.use("/produksi", produksiRouter);
app.use("/customer", customerRouter);
app.use("/pengangkutan", pengangkutanRouter);
app.use("/pengiriman", pengirimanRouter);
app.use("/grading", gradingRouter);
app.use("/auth", authRouter);

const formatDate = (date) => {
  let d = new Date(date);
return d
  let month = (d.getMonth() + 1).toString();
  let day = d.getDate().toString();
  let year = d.getFullYear();
  if (month.length < 2) {
    month = "0" + month;
  }
  if (day.length < 2) {
    day = "0" + day;
  }
  return [year, month, day].join("-");
};

// determining upload location
const storage = multer.diskStorage({
  destination: function (req, file, callback) {
    callback(null, "./public/images");
  },
  filename: async function (req, file, callback) {
//    const number = await generateNumber();
    // const formatImage = Date.now() + '-' + userId(fullName) // NO SJ 

    callback(
      null,
      file.originalname + 
        "-" +
        path.extname(file.originalname)
    );
  },
});

const generateNumber = (function (num) {
  return async function () {
    const lastNumber = await Master.findOne({
      where: { type: "upload_number" },
    });


    if (lastNumber.date !== formatDate(Date.now())) {
      await Master.update(
        { value: "0001", date: formatDate(Date.now()) },
        {
          where: { type: "upload_number" },
        }
      );
      num = 1;
      let str = String(num++);
      while (str.length < 4) str = "0" + str;
      await Master.update(
        { value: str, date: formatDate(Date.now()) },
        {
          where: { type: "upload_number" },
        }
      );
      return str;
    }
    let str = String(num++);
    while (str.length < 4) str = "0" + str;
    await Master.update(
      { value: str, date: formatDate(Date.now()) },
      {
        where: { type: "upload_number" },
      }
    );
    return str;
  };
})(1);

const upload = multer({ storage });

//app.post("/upload", (req, res) => {
app.post("/upload", upload.single("photo"), async (req, res) => {
//res.send({"ea": "ea"})
//res.send({ea: formatDate(new Date())})
 // membuat url gambar dan save ke db
let finalImageURL =
   "https://transmetalroof.com:5000/images/" + req.file?.filename;
  res.json({ status: "uploaded successfully", image: finalImageURL });
});

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
