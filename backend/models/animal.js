let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let animalSchema = new Schema({
  name: String,
  category: String,
  breed: String,
  description: String,
  needs: Array,
  born: Date,
  gender: String,
  status: String,
  img: String
});

let Animal = mongoose.model('animal', animalSchema);

module.exports = Animal