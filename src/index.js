const express = require('express')
const mongoose = require('mongoose');
const redis    = require('redis');
// const {Client} = require('pg');

// init app 
const PORT = process.env.PORT || 4000;
const app = express();


// connect to redis
const REDIS_HOST = 'redis';
const REDIS_PORT = '6379';
const redisClient = redis.createClient({
    url: `redis://${REDIS_HOST}:${REDIS_PORT}`
});
redisClient.on('error', err => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('Redis Connected ...'));
redisClient.connect();

app.get('/', (req, res) => {
    redisClient.set('producs', 'products Lists....');
    res.send('<h1> Hello Wolrd</h1>')
});

app.get('/producs', async (req, res) => {
    const products = await redisClient.get('producs');
    res.send(`<h1> Hello Wolrd</h1> <h2>${products}</h2>`)
});

// End Redis


//MONGO
const DB_USERNAME = 'root';
const DB_PASSWORD = 'example'
const DB_PORT = 27017;
const DB_HOST = 'mongo';
const URI = `mongodb://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
mongoose
    .connect(URI).then(() => console.log('connected to db ... ')).catch((err) => console.log('err', err));

// End Mongo


// Postgress

// const DB_USERNAME = 'root';
// const DB_PASSWORD = 'example'
// const DB_PORT = 5432;
// const DB_HOST = 'postgres';

// const URI = `postgresql://${DB_USERNAME}:${DB_PASSWORD}@${DB_HOST}:${DB_PORT}`;
// const client = new Client({   connectionString: URI});
// client.connect()
//   .then(() => console.log('connected to db ... '))
//   .catch((err) => console.log('Error connecting to PostgreSQL:', err));

// End Postgress


app.listen(PORT, () => console.log(`app is running on port: ${PORT}`));