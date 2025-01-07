const mongoose = require('mongoose');

const URI = 'mongodb://localhost:27017/digiLibrary';

function connectDb() {
    mongoose.connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
}

module.exports = connectDb;