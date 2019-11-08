var express = require('express')
var bodyParser = require('body-parser')
var server = express()

const dbRouter = require('./data/router');

// parse application/x-www-form-urlencoded
server.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
server.use(bodyParser.json())

server.use('/api', dbRouter);

const PORT = process.env.PORT || 4000;

server.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`);
});