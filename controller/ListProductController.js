let name;
let price;
const productModel = require("../model/addProductListModel");
exports.getProduct = ((req, res) => {
    res.render("listProduct", {
        Name: name,
        Price: price
    })
});

exports.postProduct = ((req, res) => {
    // name= req.body.name; 
    // price= +req.body.price;
    // res.redirect ("/listproducts");
    const product = new productModel({
        name: req.body.name,
        price: +req.body.price,
        image: '',
    });
    product.save().then(addedProduct => {
        res.redirect ("/listproducts");
    });


})