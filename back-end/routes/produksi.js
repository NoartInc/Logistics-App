var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization')

const {
  findAllProduksi,
  findProduksiById,
  createProduksi,
  updateProduksi,
  deleteProduksi,
  deleteAllProduksi,
} = require ('../controllers/Produksi');



/* GET users listing. */
router.get('/', findAllProduksi);
router.get('/:id', findProduksiById);
router.post('/', authentication, createProduksi);
router.put('/:id', updateProduksi);
router.delete('/:id', deleteProduksi);
router.delete('/', deleteAllProduksi);


module.exports = router;
