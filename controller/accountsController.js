const express = require ("express");
const mongoose = require ("mongoose");
const signUPModel = require("../model/signUPModel");
const bcrypt = require("bcrypt");
const signInModel= new signUPModel ();
// sign up

exports.getSignUP = ((req,res)=> {
    res.render("signup", {
        pageTitle: "Sign Up"
    })
})

 exports.postSignUP = ( async (req,res)=> {
    try {
    const passwordHashed = await bcrypt.hash(req.body.password, 10);
    signInModel= new signUPModel ({
        _id: mongoose.Types.ObjectId(),
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.lastName,
        password: passwordHashed,   
    })
    signInModel.save().then((addedCustomer) => {
        res.redirect('/');
    }).catch ((err)=> {
        console.log ("The error is: "+err)
    })
    }
    catch {
res.redirect ("/signup")
    }
    
})





//sign in
exports.getSignIn= ((req,res)=> {
    res.render("signin", {
        pageTitle: "Sign In"
    })
})
exports.postSignIn=  (async (req,res)=> {
    
       const previousEmail = await signInModel.findOne({email : req.body.email});
        const previousPassword = await signInModel.findOne({password : req.body.body});
        const validPassword = await bcrypt.compare(req.body.password, previousPassword);
        const validEmail = await bcrypt.compare(req.body.email, previousEmail);
        if (validPassword &&  validEmail) {
            res.redirect ("/")
            
        } else {
            res.redirect ("/signin")
        }

})