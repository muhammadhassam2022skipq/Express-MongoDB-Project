const mongoose = require ("mongoose");
const productSchema = mongoose.Schema;

let smartphone = new productSchema({
    name: {
      type: String,
      required: true
    },
    price: {
      type: Number,
      required: true
    },
    image: {
      type: String,
      required: false
    }
  });
  module.exports= mongoose.model("myProduct", smartphone);