require('dotenv').config();
const express = require('express');
const bodyParaser = require('body-parser');
const connectDB = require('./db');
const cors = require('cors');

const books = require('./routes/api/books');


const app = express();

// Connect Database
connectDB();

app.use(bodyParaser.urlencoded({ extended: false }));
app.use(bodyParaser.json());
app.use(cors({ origin: true, credentials: true }));

app.get('/', (req, res) => res.send('Hello world!'));

app.use('/api/books', books);

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));