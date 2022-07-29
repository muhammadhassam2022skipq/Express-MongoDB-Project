const express = require ("express");
const signUPModel = require("../model/signUPModel");
const mongoose = require ("mongoose");
const bcrypt = require("bcrypt");
// let signUP= {};
// sign up

exports.getSignUP = ((req,res)=> {
    res.render("signup", {
        pageTitle: "Sign Up"
    })
})
exports.postSignUP = ((req,res)=> {
    bcrypt.hash(req.body.password, 10).then ((hash)=>{
        const signUP = new signUPModel ({
            _id: mongoose.Types.ObjectId(),
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            email: req.body.email,
             password: hash
    
        })
        signUP.save().then((signedUPUer)=>{
            console.log ("successfuly saved"+signedUPUer)
            res.redirect("/signin")
        });
    }).catch((err)=> {
        console.log ("The hash error is: "+ err);
    });
    
})





//sign in
exports.getSignIn= ((req,res)=> {
    res.render("signin", {
        pageTitle: "Sign In"
    })
})

exports.postSignIn = ((req,res)=> {
        signUPModel.findOne ({email:req.body.email}, (err, myUser)=> {
            if (!err) {
                bcrypt.compare(req.body.password, this.password, ()=>{
                    res.redirect("/listproducts");
                })
                
            console.log ("myUser is:" +myUser)
        } else {
            console.log (myUser)
            res.redirect ("/signin")
        }
        })
       
       


})
// exports.postSignIn=  (async (req,res)=> {
    
//     //    const previousEmail = await signUPModel.findOne({email : req.body.email});
//     //     const previousPassword = await signUPModel.findOne({password : req.body.body});
//     //     const validPassword = await bcrypt.compare(req.body.password, previousPassword);
//     //     const validEmail = await bcrypt.compare(req.body.email, previousEmail);
//     //     if (validPassword &&  validEmail) {
//     //         res.redirect ("/")
            
//     //     } else {
//     //         res.redirect ("/signin")
//     //     }

// })