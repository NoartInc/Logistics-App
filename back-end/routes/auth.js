var express = require("express");
var router = express.Router();

const { login } = require("../controllers/Auth");
/* GET users listing. */

router.post("/", login);

module.exports = router;