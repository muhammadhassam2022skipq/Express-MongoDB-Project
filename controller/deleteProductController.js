
const productModel = require("../model/addProductListModel");
const mongoose = require ("mongoose");
exports.get=((req,res)=> {
    res.render("delete", {
        pageTitle: "Delete Products"
    })
});
exports.postDelete = ((req,res)=> {
    const deleteInDB = async ()=>{
        let data = await productModel.deleteOne({name: req.body.deletedProduct})
    }
    deleteInDB();
    res.redirect ("/listproducts");
})