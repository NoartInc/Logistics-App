var express = require("express");
var router = express.Router();
var authentication = require("../middleware/authorization");
var path = require("path");
var multer = require("multer");
var { getImage } = require("../utils/helper");
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.resolve("public/images"));
  },
  filename: (req, file, cb) => {
    cb(null, getImage(file));
  },
});
var upload = multer({ storage: storage });

const {
  findAllPengiriman,
  findPengirimanById,
  createPengiriman,
  updatePengiriman,
  deletePengiriman,
  deleteAllPengiriman,
  downloadData,
  getDashboard,
} = require("../controllers/Pengiriman");

/* GET users listing. */
router.get("/", authentication, findAllPengiriman);
router.get("/:id", findPengirimanById);
router.get("/export/downloadPengiriman", downloadData);
router.get("/dashboard/pengiriman", getDashboard);
router.post("/", authentication, createPengiriman);
router.post(
  "/:id/update",
  authentication,
  upload.single("image"),
  updatePengiriman
);
router.delete("/:id", deletePengiriman);
router.delete("/", deleteAllPengiriman);

module.exports = router;
