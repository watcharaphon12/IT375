const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

router
.route('/')
.get(productController.getAllProduct)
.post(productController.createProduct);


router
.route('/:id')
.get(productController.getProduct)
.put(productController.updateProduct)
.delete(productController.deleteProduct);
module.exports = router;