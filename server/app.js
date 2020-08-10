const express = require('express');
const config = require('config');
const app = express();
const cors = require('cors');
const pino = require('express-pino-logger')();
const routers = require('./routers');
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(pino);

app.use(config.basePathApi, routers);

module.exports = app;