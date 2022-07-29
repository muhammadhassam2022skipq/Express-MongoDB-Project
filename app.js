// importing all the neccasery modules
const express = require("express");
const bodyParser = require("body-parser");
const app = express(); // Express app initializing
const mongoose = require("mongoose");
const session = require('express-session');
const MongoDBStore = require('connect-mongodb-session')(session);
const homeRoute = require("./routes/homeRoute");
const bcrypt = require("bcrypt");
const addProductRoute = require("./routes/addProductRoute");
const listProductRoute = require("./routes/listProductRoute");
const updateProductRoute = require("./routes/upadateRoute");
const deleteProductRoute = require("./routes/deleteRoute");
const accountRoute = require ("./routes/accountRoute");



const store = new MongoDBStore({
    uri: 'mongodb://cmdlhrltx03:27017/store-sessions',
    collection: 'sessions'
  });

// To
app.use(bodyParser.urlencoded({ extended: false }));

//Template engine ejs in views 
app.set("views", "views");
app.set("view engine", "ejs");

app.use(
    session({
      secret: 'my secret',
      resave: false,
      saveUninitialized: false,
      store: store
    })
  );

//giving the location of static files
app.use(express.static(__dirname + "/public"));

// loading error page


//routing of all the pages
app.use(homeRoute);
app.use(addProductRoute);
app.use(listProductRoute);
app.use(updateProductRoute);
app.use(deleteProductRoute);
app.use (accountRoute);

app.use((req, res,next) => {
    res.render("error", {
        pageTitle: "Error Page Not Found",
        next
    })
});


// mongodb://cmdlhrltx03:27017/hassamDB
// Connecting with mongoDB server and then Listening to the port
mongoose.connect('mongodb://cmdlhrltx03:27017/hassamDB').then(() => {
    app.listen(4000, () => {
        console.log("Listening on port 4000");
    })
}).catch((err) => {
    console.log("The error is: " + err);
});
