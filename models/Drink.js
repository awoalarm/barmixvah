var Mongoose = require('mongoose');

exports.DrinkSchema = new Mongoose.Schema({
  name: { type: String, required: true },
  besk: { type: String, required: false },
  image: { type: String, required: false },
  ingredients: [{
    name: String,
    amount: Number
  }]
});