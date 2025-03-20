const express = require('express');
const router = express.Router();
const {getAllProducts,getProductById,addToCart} = require('../controllers/productControllers')


router.get('/products', getAllProducts);

//get product by id

router.get('/products/:id',getProductById)

router.post('/addToCart',addToCart)
module.exports = router;
