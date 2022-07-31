var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization');


const {
  findAllPengiriman,
  findPengirimanById,
  createPengiriman,
  updatePengiriman,
  deletePengiriman,
  deleteAllPengiriman,
} = require ('../controllers/Pengiriman');


/* GET users listing. */
router.get('/', findAllPengiriman);
router.get('/:id', findPengirimanById);
router.post('/', authentication, createPengiriman);
router.put('/:id', authentication, updatePengiriman);
router.delete('/:id', deletePengiriman);
router.delete('/', deleteAllPengiriman);


module.exports = router;
