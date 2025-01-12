const express = require('express');
const connectDb = require('./config/db');
const bookModel = require('./model/bookSchema');
const userModel = require('./model/userSchema');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDb();


app.post('/', async (req, res) => {
    const {name, email, phone, password} = req.body;
    // if (!name) {
    //     const userData = await userModel.findOne({email});
    //     console.log(userData);
    //     if (userData) {
    //         return res.send('Email already exists');
    //     } else if(userData.password === password) {
    //         return res.send("login successfully");
    //     }
    // }

    console.log(name, email, phone, password);
    const user = await userModel.findOne({email});
    if (user) {
        return res.send('Email already exists');
    }
    const newUser = new userModel({ name, email, phone, password });
    await newUser.save();
    res.send('User registered successfully');
})
app.get('/search', async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
})

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
})
