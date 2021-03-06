let mongoose = require('mongoose');

let Schema = mongoose.Schema;

let userSchema = new Schema({
  username: {
    required: true,
    type: String
  },
  uid: {
    required: true,
    type: String
  },
  password: {
    required: true,
    type: String
  }
});

let User = mongoose.model('user', userSchema);

module.exports = User
