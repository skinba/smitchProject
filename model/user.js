const mongoose = require('mongoose');
const Email = require('mongoose-type-email');
const bcryptjs = require('bcryptjs');

const userSchema = new mongoose.Schema({

    email : {
        type : Email,
        required : true
    },
    password : {
        type : String,
        required : true
    }
});

userSchema.pre('save',async function() {

    if(this.isModified('password') || this.isNew())
    {
        const salt = await bcryptjs.genSalt();
        const hash = await bcryptjs.hash(this.password,salt);
        this.password = hash;
    }
});

const user = mongoose.model('user',userSchema);

module.exports = user