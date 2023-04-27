const express = require('express');
const { getAllProducts, getProduct } = require('../database/products');
const router = express.Router();


router.get('/', async (req, res) => {
    const products = await getAllProducts();
    // console.log(products);
    res.send({status:'OK', data:products});
});

router.get('/:productId', async (req, res) => {
    try{
        const product = await getProduct(req.params.productId);

        if(!product){
            res.status(404).send({status:'Failed', error: 'Product not found'});
            return;
        }

        res.send({status:'OK', data:product});
    } catch (e){
        res.status(401).send({status:'Failed', error: e.message});
    }   
});

module.exports = router;
