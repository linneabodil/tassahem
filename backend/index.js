const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const port = process.env.PORT ||3000;
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

let app = express();

app.use(express.json());
app.use(cors());

app.listen(port, () => {
    console.info('Du tassar in :)')
});

app.route('/animal')
.get(animal.get)