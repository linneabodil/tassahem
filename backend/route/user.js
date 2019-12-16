let uuid = require('uuid/v4');
let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let User = require('../models/user');
let salt = 10;

// create user
module.exports.post = async (req, res) => {
  try {
    if (await User.findOne({ username: req.body.username })) {
      res.status(200).send({ message: 'Användarnamn upptaget.'})
    }
    else {
      let newUser = {
        username: req.body.username,
        password: await bcrypt.hash(req.body.password, salt),
        uid: uuid()
      }
      let user = await User.create(newUser);
      res.status(200).send({ user: user })
    }
  }

  catch(err) {
    res.status(400).send(err.stack)
  }
}
