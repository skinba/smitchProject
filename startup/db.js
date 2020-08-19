const mongoose = require('mongoose');
const config = require('../config/default.json');
const winston = require('winston');

module.exports = () => {

    const db = config.db;
    
    mongoose.connect(db)
                    .then(() => winston.info(`Connected to ${db}`))
                    .catch((error) => winston.error(`${error}`))
}