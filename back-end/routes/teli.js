var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization')

const {
  findAllTeli,
  findTeliById,
  createTeli,
  updateTeli,
  deleteTeli,
  deleteAllTeli,
  countTonase
} = require ('../controllers/Teli');



/* GET users listing. */
router.get('/', findAllTeli);
router.get('/:id', findTeliById);
router.get('/:id/count-tonase', countTonase);
router.post('/', authentication, createTeli);
router.put('/:id', updateTeli);
router.delete('/:id', deleteTeli);
router.delete('/', deleteAllTeli);

module.exports = router;
