const express = require('express');
const connectDb = require('./config/db');
const bookModel = require('./model/bookSchema');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

connectDb();

app.get('/search', async (req, res) => {
    const data = await bookModel.find();
    res.json(data);
})

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
})