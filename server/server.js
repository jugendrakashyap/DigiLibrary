const express = require('express');
const connectDb = require('./config/db');
const bookModel = require('./model/bookSchema');
const userModel = require('./model/userSchema');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');

const app = express();
const SECRET_KEY = 'your-secret-key';

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

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

        const token = jwt.sign({ email }, SECRET_KEY, { expiresIn: '1h' });
        console.log('token: ', token);

        res.send({ message: 'Logged in successfully', login: true, token: token });
    }
    catch (error) {
        console.log('erro: ', error);
    }

})

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
})
app.get('/search', async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
})

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
})
