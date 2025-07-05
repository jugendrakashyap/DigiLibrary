const express = require('express');
const bodyParser = require('body-parser');
// const cookieParser = require('cookie-parser');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const cors = require('cors');
// const helmet = require('helmet');

const connectDb = require('../config/db');
const routes = require('../routes/routes');

const app = express();

app.use(express.json());
// app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors({ origin: "https://digilibrary-w06n.onrender.com" }));
// app.use(helmet());

connectDb();

app.get('/', (req, res) => {
    res.send("homepage");
})

app.use('/', routes);

app.listen(8000, () => {
    console.log('Server running on http://localhost:8000');
})
