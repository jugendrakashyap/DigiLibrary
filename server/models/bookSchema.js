const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: {type: String},
    subtitle: {type: String},
    author: {type: String},
    publisher: {type: String},
    date: {type: String},
    language: {type: String},
    edition: {type: String},
    description: {type: String},
    pages: {type: String},
    genre: {type: String}
})

const bookModel = new mongoose.model('book', bookSchema);

module.exports = bookModel;