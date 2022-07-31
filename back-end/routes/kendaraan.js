var express = require('express');
var router = express.Router();

const {
  findAllKendaraan,
  findKendaraanById,
  createKendaraan,
  updateKendaraan,
  deleteKendaraan,
  deleteAllKendaraan,
} = require ('../controllers/Kendaraan');



/* GET users listing. */
router.get('/', findAllKendaraan);
router.get('/:id', findKendaraanById);
router.post('/', createKendaraan,);
router.put('/:id', updateKendaraan,);
router.delete('/:id', deleteKendaraan);
router.delete('/', deleteAllKendaraan);

module.exports = router;
