var express = require('express');
var router = express.Router();
var authentication = require('../middleware/authorization')
const grading = require ('../controllers/Grading');

router.get('/', authentication, grading.findAll);
router.get('/:id', authentication, grading.findById);
router.post('/', authentication, grading.create);
router.put('/:id', authentication, grading.update);
router.delete('/:id', authentication, grading.delete);


module.exports = router;
