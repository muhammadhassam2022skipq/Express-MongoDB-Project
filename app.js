const express = require("express");
const bodyParser= require ("body-parser");
const app= express();
const mongoose = require("mongoose");
const homeRoute= require("./routes/homeRoute");
const addProductRoute= require("./routes/addProductRoute");
const listProductRoute= require("./routes/listProductRoute");


// comments
app.use(bodyParser.urlencoded({ extended: false }));

//comments 
app.set ("views", "views");
app.set("view engine", "ejs");


app.use(homeRoute);
app.use(addProductRoute);
app.use(listProductRoute);


// Listening to the port

mongoose.connect('mongodb://cmdlhrltx03:27017/hassamDB',
  {
    // useNewUrlParser: true,
    // useFindAndModify: false,
    // useUnifiedTopology: true
  }
).then(()=> {
    app.listen (4000, ()=> {
        console.log ("Listening on port 4000");
    })
}).catch ((err)=> {
    console.log ("The error is: "+err);
});
