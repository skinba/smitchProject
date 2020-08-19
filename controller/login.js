const user_Model = require('../model/user');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');
const devConfig = require('../config/env/development')

module.exports.login_User = async(req,res,next) => {

    const reqData = req.body;

    const user = await user_Model.findOne({email : reqData.email});
    
    if(!user)
    {
        return res.send({err : "Invalid Username or Password"})
    }

    const matched = await bcryptjs.compare(reqData.password,user.password);

    if(!matched)
    {
        return res.send({err : "Invalid Credentials"})
    }

    const access_token = jwt.sign({id:user._id},devConfig.secretkey,{expiresIn:"1d"});

    const loggedUser = {
        user_id : user._id,
        email : user.email,
        password : user.password
    };

    return res.send({loggedUser,access_token})



}