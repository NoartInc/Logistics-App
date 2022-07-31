var express = require('express');
var router = express.Router();

const {
  findAllCustomer,
  findCustomerById,
  createCustomer,
  updateCustomer,
  deleteCustomer,
  deleteAllCustomer,
} = require ('../controllers/Customer');



/* GET users listing. */
router.get('/', findAllCustomer);
router.get('/:id', findCustomerById);
router.post('/', createCustomer,);
router.put('/:id', updateCustomer,);
router.delete('/:id', deleteCustomer);
router.delete('/', deleteAllCustomer);

module.exports = router;
