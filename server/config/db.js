const mongoose = require('mongoose');

const URI = 'mongodb+srv://kjugendra63:639871qp@cluster0.uuxzv.mongodb.net/digiLibrary';

function connectDb() {
    mongoose.connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
}

module.exports = connectDb;