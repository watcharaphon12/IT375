
const Tour = require('../models/tourModel');
exports.getAllTours =async(req,res) => {
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
            const tours = await Tour.find();
            res.status(200).json({
            status:'success',
            results: tours.length,
            data:{tours}
            });
            }catch (err){
            res.status(404).json({
            status: 'fail',
            message: err
            });
            }
       
            };

exports.getOneTour = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const tours = await Tour.findOne({id: (productId)});
        if(tours){
        res.status(200).json({
        status:'success',
        data: {tours}
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
exports.createNewTour = async(req,res) => {
   try{
   
    let currentRProductId = await Tour.find({}).sort({id: -1}).limit(1).then((lastProducts) => {
        return lastProducts[0].id

    });
    currentRProductId += 1;
const creatProduct = {
id: currentRProductId,
...req.body
};
const newProducts = await Tour.create(creatProduct);
res.status(201).json({
status:'success',
data: {tours: newProducts}
});
    }catch(err){
    res.status(404).json({
    status:'fail',
    message: 'Error'
    });
    
    }
    };
exports.updateTour = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const tours = await Tour.findOneAndUpdate({id: productId},req.body,{
        new: true,
        runValidators: true
        });
        if(tours){
        res.status(200).json({
        status:'success',
        data: {tours}
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
exports.deleteTour = async(req,res) => {
    try{
        const productId = parseInt(req.params.id);
        const tours = await Tour.findOneAndDelete({id: parseInt(productId)});
        if(tours){
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