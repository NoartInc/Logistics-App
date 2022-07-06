var express = require('express');
var router = express.Router();

const {
  findAllTeli,
  findTeliById,
  createTeli,
  updateTeli,
  deleteTeli,
  deleteAllTeli,
} = require ('../controllers/Teli');



/* GET users listing. */
router.get('/', findAllTeli);
router.get('/:id', findTeliById);
router.post('/', createTeli);
router.patch('/:id', updateTeli);
router.delete('/:id', deleteTeli);
router.delete('/', deleteAllTeli);

module.exports = router;
