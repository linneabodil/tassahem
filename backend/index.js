const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT || 3000;
const jsonwebtoken = require('jsonwebtoken');

var PASSWORD = 'tassahem';

mongoose.connect(`mongodb+srv://tassahem:${PASSWORD}@tassahem-hm9fl.mongodb.net/tassahem?retryWrites=true`, {
  useNewUrlParser: true
})
.then(() => {
  console.info('Mjao')
})
.catch(err =>{
  console.log('Morr')
});

// routes
let animal = require('./route/animal');
let user = require('./route/user');
let verify = require('./route/verify');

let app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
  console.info('Du tassar in :)')
});

app.route('/animals')
.get(animal.get)
.post(animal.post)
.put(animal.put)

app.route('/users')
.post(user.post)

app.route('/verify')
.post(verify.post)
