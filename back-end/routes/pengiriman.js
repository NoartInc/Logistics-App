var express = require("express");
var router = express.Router();
var authentication = require("../middleware/authorization");
var multer = require("multer");
var compressImage = require("../middleware/compressImage");
var fs = require("fs");
var os = require("os");
var path = require("path");
const tmpDir = path.join(os.tmpdir(), "upload_tmp");
if (!fs.existsSync(tmpDir)) fs.mkdirSync(tmpDir, { recursive: true });

var upload = multer({
  storage: multer.diskStorage({
    destination: (req, file, cb) => cb(null, tmpDir),
    filename: (req, file, cb) => cb(null, `${Date.now()}_${file.originalname}`)
  }),
  limits: { fileSize: 10 * 1024 * 1024 } // 10MB
});

const {
  findAllPengiriman,
  findPengirimanById,
  createPengiriman,
  updatePengiriman,
  deletePengiriman,
  deleteAllPengiriman,
  downloadData,
  getDashboard,
  updateData,
  updateInformasi,
  updateExclude
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
  compressImage,
  updatePengiriman
);
// karena simple update, paket put aja
// endpoint-nya update-data
router.put("/:id/update-data", authentication, updateData);
router.put("/:id/update-informasi", authentication, updateInformasi);
router.put("/:id/update-exclude", authentication, updateExclude);
router.delete("/:id", authentication, deletePengiriman);
router.delete("/", authentication, deleteAllPengiriman);

module.exports = router;
