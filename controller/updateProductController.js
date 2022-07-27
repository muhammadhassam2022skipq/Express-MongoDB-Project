
const productModel = require("../model/addProductListModel");
const mongoose = require ("mongoose");
exports.getUpdate=((req,res)=> {
    res.render("update", {
        pageTitle: "Product Update"
    })
});

exports.postUpdate = ((req,res)=> {
    const updateInDB =async  () => {
        let data =await  productModel.updateOne(
            { name: req.body.oldName },
            {
                $set: { name: req.body.updatedName}
            }
        )
    }
    updateInDB();
    res.redirect ("/listproducts");
})