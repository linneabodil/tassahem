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

// post animals
module.exports.post = async (req, res) => {
  try {
    console.log(req)
    res.status(200).send(await Animal.create(req.body));
  }
  catch (err) {
    res.status(500).send(err.stack);
  }
};

// update animals
module.exports.put = async (req, res) => {
  try {
    res.status(200).send(await Animal.findOneAndUpdate({
        _id: req.body._id
      },
      req.body))
  } catch {
    res.status(404).send(err.stack);
  }
}