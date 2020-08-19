const router = require('express').Router();
const device_Controller = require('../controller/device');
const passport = require('passport');
const mail = require('../mail/mail');

router.post('/create',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    device_Controller.create_DeviceDetails(req,res,next)
})

router.get('/read/:id',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    device_Controller.read_DeviceDetails(req,res,next)
})

router.put('/edit/:id',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    device_Controller.edit_DeviceDetails(req,res,next)
})

router.delete('/delete/:id',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    device_Controller.delete_DeviceDetails(req,res,next)
})

router.put('/currentState/:id',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    device_Controller.change_CurrentState(req,res,next)
})

//Mail

router.post('/share',passport.authenticate("jwt", { session: false }),(req,res,next) => {
    mail.sent(req,res,next)
})

module.exports = router