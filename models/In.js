var Mongoose = require('mongoose');

exports.IngSchema = new Mongoose.Schema({
  name: { type: String, required: true }
});