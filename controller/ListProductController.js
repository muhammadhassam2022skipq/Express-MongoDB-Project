let name;
let price;
const productModel = require("../model/addProductListModel");
const mongoose = require ("mongoose");
exports.getProduct = ((req, res) => {
    
    productModel.find().then (products=> {
        res.render("listProduct", {
            products : products
         })
    }).catch ((err)=> {
        console.log("The error is: "+err)
    })
});

exports.postProduct = ((req, res) => {
    // name= req.body.name; 
    // price= +req.body.price;
    // res.redirect ("/listproducts");
    const product = new productModel({
        _id: mongoose.Types.ObjectId(),
        name: req.body.name,
        price: +req.body.price,
        image: '',
    });
    product.save().then(addedProduct => {
        res.redirect ("/listproducts");
    });


})