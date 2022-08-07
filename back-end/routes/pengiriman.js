var express = require("express");
var router = express.Router();
var authentication = require("../middleware/authorization");

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
router.put("/:id", authentication, updatePengiriman);
router.delete("/:id", deletePengiriman);
router.delete("/", deleteAllPengiriman);

module.exports = router;
