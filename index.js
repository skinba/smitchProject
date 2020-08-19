const winston = require('winston');
const express = require('express');
const app = express();

require('./startup/db')();
require('./startup/router')(app);
require('./mail/mail');

const port = 4000 || process.env.port;

const server = app.listen(port,() => winston.info(`Server is running at port ${port}`));
