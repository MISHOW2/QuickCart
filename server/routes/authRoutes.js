const express = require('express');
const router = express.Router();
const products = require("../config/db");


router.get("/products", (req, res) => {
  res.json(products);
});

//get product by id

router.get('/product/:id',(res,req)=>{
    const id = req.params.id

    /*const product = products.find(product=> product.id===Number(id));

    if (!product) return res.status(401).json({Error:"product Id not found"})

    res.json({product})
    */

    console.log(id);
    res.send(`product id ${id}`)
    
})


module.exports = router;
