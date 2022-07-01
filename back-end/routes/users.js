var express = require('express');
var router = express.Router();
const db = require('../models');

const {
  getAllUsers,
  getUserById,
  createUser,
  updateUser,
  deleteUser,
} = require('../controllers/User') 

/* GET users listing. */
router.get('/users', getAllUsers);
router.get('/users:id', getUserById);
router.post('/users', createUser);
router.patch('/users:id', updateUser);
router.delete('/users:id', deleteUser);

module.exports = router;
