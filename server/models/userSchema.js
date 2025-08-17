const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name: {type: String},
    email: {type: String},
    phone: {type: Number},
    password: {type: String},
    otp: {type: Number},
    otpExpires: {type: Date}
})

const User = new mongoose.model('user', userSchema);

module.exports = User;