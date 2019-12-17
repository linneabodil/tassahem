let bcrypt = require('bcryptjs');
let jwt = require('jsonwebtoken');
let User = require('../models/user');

// login
module.exports.post = async (req, res) => {
  let user = await User.findOne({
    username: req.body.username,
   });
  let match = await bcrypt.compare(req.body.password, user.password);

  try {
    if (match) {
      let verify = jwt.sign({
        uid: user.uid
      }, process.env.PASSWORD);
      res.status(200).send({
        username: user.username,
        authToken: verify
      });
    }
    else {
      res.status(400).send("Fel användarnamn/lösenord. Schas!");
    }
  }

  catch (err) {
    alert(err)
  }
};
