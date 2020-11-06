
const Finals = require('../models/productModel');
exports.getAllProduct =async(req,res) => {
   /* try{
        const products = await Products.find();
        res.status(200).render("main",
            {
        status:'success',
        results: products.length,
        data: {products}
        });
        }catch (err){
        res.status(404).json({
        status: 'fail',
        message: err
        });} */
        try {
            const finals = await Finals.find();
            res.status(200).json({
            status:'success',
            results: finals.length,
            data:{finals}
            });
            }catch (err){
            res.status(404).json({
            status: 'fail',
            message: err
            });
            }
       
            };

exports.getProduct = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const products = await Products.findOne({id: (productId)});
        if(products){
        res.status(200).json({
        status:'success',
        data: {products}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status:'fail',
        message: err
        });
        
        }
};
exports.createProduct = async(req,res) => {
   try{
   
    let currentRProductId = await Products.find({}).sort({id: -1}).limit(1).then((lastProducts) => {
        return lastProducts[0].id

    });
    currentRProductId += 1;
const creatProduct = {
id: currentRProductId,
...req.body
};
const newProducts = await Products.create(creatProduct);
res.status(201).json({
status:'success',
data: {products: newProducts}
});
    }catch(err){
    res.status(404).json({
    status:'fail',
    message: 'Error'
    });
    
    }
    };
exports.updateProduct = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const products = await Products.findOneAndUpdate({id: productId},req.body,{
        new: true,
        runValidators: true
        });
        if(products){
        res.status(200).json({
        status:'success',
        data: {products}
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        }
};
exports.deleteProduct = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const products = await Products.findOneAndDelete({id: parseInt(productId)});
        if(products){
        res.status(200).json({
        status:'success',
        data: null
        });
        }else{
        res.status(404).json({
        status:'fail',
        message: 'no id found'
        });
        }
        }catch(err){
        res.status(404).json({
        status: 'fail',
        message: err
        });
        
        }
};