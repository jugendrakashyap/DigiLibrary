const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

require('dotenv').config();
const SECRET_KEY = 'process.env.SECRET_KEY';
const bookModel = require('../models/bookSchema');
const userModel = require('../models/userSchema');

const register = async (req, res) => {
    const { name, email, phone, password, confirmPassword } = req.body;

    console.log(name, email, phone, password, confirmPassword);

    const user = await userModel.findOne({ email });
    if (user) {
        return res.send({ message: 'Email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new userModel({ name, email, phone, password: hashedPassword });
    await newUser.save();
    return res.send({ message: 'User saved successfully, click on ', registration: true });
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await userModel.findOne({ email });
        console.log(user);
        if (!user) {
            return res.send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.send({ message: 'Invalid Username or Password' });

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '5m' });
        console.log('token: ', token);

        res.send({ message: 'Logged in successfully', login: true, token: token });
    }
    catch (error) {
        console.log('erro: ', error);
    }
}

const search = async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
}

module.exports = { register, login, search };