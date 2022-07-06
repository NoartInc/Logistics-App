var express = require('express');
var router = express.Router();

const {
  findAllPengangkutan,
  findPengangkutanById,
  createPengangkutan,
  updatePengangkutan,
  deletePengangkutan,
  deleteAllPengangkutan,
} = require ('../controllers/Pengangkutan');



/* GET users listing. */
router.get('/', findAllPengangkutan);
router.get('/:id', findPengangkutanById);
router.post('/', createPengangkutan,);
router.patch('/:id', updatePengangkutan,);
router.delete('/:id', deletePengangkutan);
router.delete('/', deleteAllPengangkutan);

module.exports = router;
