let Animal = require('../models/animal');

// get all animals
module.exports.get = async (req, res) => {
  try {
    res.status(200).send(await Animal.find({}));
  }
  catch (err) {
    res.status(500).send(err.stack);
  }
};