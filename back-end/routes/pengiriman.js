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
  downloadData
} = require ('../controllers/Pengiriman');


/* GET users listing. */
router.get('/', authentication, findAllPengiriman);
router.get('/:id', findPengirimanById);
router.get('/downloadPengiriman', downloadData)
router.post('/', authentication, createPengiriman);
router.put('/:id', authentication, updatePengiriman);
router.delete('/:id', deletePengiriman);
router.delete('/', deleteAllPengiriman);


module.exports = router;
