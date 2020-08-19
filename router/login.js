const router = require('express').Router();
const login_Controller = require('../controller/login');

router.post('/',(req,res,next) => {
    login_Controller.login_User(req,res,next)
})

module.exports = router