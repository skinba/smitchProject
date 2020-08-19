const mongoose = require('mongoose');

const deviceSchema = new mongoose.Schema({

    name : {
        type : String,
        required : true
    },
    devType : {
        type : String,
        required : true
    },
    currentState : {
        type : Boolean,
        required : true
    },
    lastUpdated : {
        type : String
    },
    user_id : {
        type : String,
        required : true
    }
});

const device = mongoose.model('device',deviceSchema);

module.exports = device