const mongoose = require('mongoose');

require('dotenv').config();
const URI = process.env.MONGO_URI;

function connectDb() {
    mongoose.connect(URI)
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Could not connect to MongoDB', err));
}

module.exports = connectDb;