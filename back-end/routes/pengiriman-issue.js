var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization')

const {
  findAllPengirimanIssue,
  findPengirimanIssueById,
  createPengirimanIssue,
  updatePengirimanIssue,
  deletePengirimanIssue,
  deleteAllPengirimanIssue,
} = require ('../controllers/PengirimanIssue');



/* GET users listing. */
router.get('/', authentication, findAllPengirimanIssue);
router.get('/:id', findPengirimanIssueById);
router.post('/', authentication, createPengirimanIssue);
router.put('/:id', authentication, updatePengirimanIssue);
router.delete('/:id', authentication, deletePengirimanIssue);
router.delete('/', authentication, deleteAllPengirimanIssue);


module.exports = router;
