var express = require('express');
var router = express.Router();

const {
  findAllUsers,
  findUserById,
  createUser,
  updateUser,
  deleteUser,
  deleteAllUsers,
} = require ('../controllers/User');



/* GET users listing. */
router.get('/', findAllUsers);
router.get('/:id', findUserById);
router.post('/', createUser);
router.patch('/:id', updateUser);
router.delete('/:id', deleteUser);
router.delete('/', deleteAllUsers);

module.exports = router;
