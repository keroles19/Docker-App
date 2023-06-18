const express = require('express')
const mongoose = require('mongoose');

// init app 
const PORT = process.env.PORT || 4000;
const app = express();

// connect to db
const DB_USERNAME = 'root';
const DB_PASSWORD = 'example'
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
    .connect(URI).then(() => console.log('connected to db ... ')).catch((err) => console.log('err', err));

app.get('/', (req, res) => res.send('<h1> Hello Wolrd</h1>'));

app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));