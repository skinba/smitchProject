const user_Model = require('../model/user');

module.exports.signup_User = async(req,res,next) => {

    try{
        let reqData = {
            email : req.body.email,
            password : req.body.password
        };
        const data = new user_Model(reqData);
        const saveData = await data.save();
        return res.send(saveData)
    }

    catch(error){
        console.log(error);
    }
}