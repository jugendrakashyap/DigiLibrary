const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    password: {type: String}
})

const userModel = new mongoose.model('user', userSchema);

module.exports = userModel;