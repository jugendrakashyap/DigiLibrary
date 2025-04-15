const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

require('dotenv').config();

const connectDb = require('./config/db');
const bookModel = require('./models/bookSchema');
const userModel = require('./models/userSchema');

const app = express();
const SECRET_KEY = process.env.SECRET_KEY; // Fix: Use the environment variable

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(helmet());

connectDb();

app.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);
        const user = await userModel.findOne({ email });
        console.log(user);
        if (!user) {
            res.send({ message: 'User not found' });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) return res.send({ message: 'Invalid Username or Password' });

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1m' });
        console.log('token: ', token);

        res.send({ message: 'Logged in successfully', login: true, token: token });
    } catch (error) {
        console.log('error: ', error);
    }
});

app.post('/signup', async (req, res) => {
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
});

app.get('/search', async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
});

const clientPath = path.join(__dirname, '..', 'client', 'build');
app.use(express.static(clientPath));

// Ensure the catch-all route works correctly
app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'), (err) => {
        if (err) {
            res.status(500).send(err);
        }
    });
});

app.listen(8000, '0.0.0.0', () => {
    console.log('Server running on http://localhost:8000');
});