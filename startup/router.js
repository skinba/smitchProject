const body_parser = require('body-parser');
const cors = require('cors');
const signup_Router = require('../router/signup');
const login_Router = require('../router/login');
const device_Router = require('../router/device');
const {configureJWTStrategy} = require('../middlewares/passport-jwt')



module.exports = (app) => {

    configureJWTStrategy();
    app.use(body_parser.json());
    app.use(body_parser.urlencoded({extended : false}));

    app.use(cors());
    app.use((req,res,next) => {
        res.header('Access-Control-Allow-Origin',"*");
        res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
        res.header('Access-Control-Allow-Headers','Content-Type');
        next();
    });

    app.use('/api/signup',signup_Router);
    app.use('/api/login',login_Router);
    app.use('/api/device',device_Router);    

}