const express = require('express');
const router = express.Router();
const productController = require('../controllers/tourController');

router
.route('/')
.get(productController.getAllTours)
.post(productController.createNewTour);


router
.route('/:id')
.get(productController.getOneTour)
.put(productController.updateTour)
.delete(productController.deleteTour);
module.exports = router;