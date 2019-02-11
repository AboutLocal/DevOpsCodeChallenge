const keys = require('./keys');

// Express App Setup
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Postgres Client Setup
const { Pool } = require('pg');
const pgClient = new Pool({
  user: keys.pgUser,
  host: keys.pgHost,
  database: keys.pgDatabase,
  password: keys.pgPassword,
  port: keys.pgPort
});
pgClient.on('error', () => console.log('Lost PG connection'));

pgClient
  .query('CREATE TABLE IF NOT EXISTS values (number INT, square INT)')
  .catch(err => console.log(err));


// Express route handlers

app.get('/', (req, res) => {
  res.send('Hi');
});

app.get('/values/all', async (req, res) => {
  console.log ('get all');
  const values = await pgClient.query('SELECT * from values');
  res.send(values.rows);
});

app.get('/values/current', async (req, res) => {
  const values = await pgClient.query('SELECT number from values')
    res.send(values.rows);
  });

app.post('/values', async (req, res) => {
  const index = req.body.index;
  console.log('test');
  console.log (req.body);
  const squared = parseInt(index[0]**2);
    pgClient.query('INSERT INTO values(number, square) VALUES($1, $2)', [parseInt(index), squared])
    .then(res => {
      console.log(res.rows[0])
    })
    .catch(e => console.error(e.stack));
});

app.listen(5000, err => {
  console.log('Listening');
});
