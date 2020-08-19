const router = require('express').Router();
const signup_Controller = require('../controller/signup');

router.post('/',(req,res,next) => {
        signup_Controller.signup_User(req,res,next)
})


module.exports = router