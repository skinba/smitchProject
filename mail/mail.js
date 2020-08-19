const nodemailer = require('nodemailer'); 

module.exports.sent = (req,res) => {

    let mailTransporter = nodemailer.createTransport({ 
        service: 'gmail', 
        auth: { 
            user: req.body.user, 
            pass: req.body.pass,
        } 
    }); 

    const a = req.body.name;
    
    let mailDetails = { 
        from: req.body.from, 
        to: req.body.to, 
        subject: "Device Details", 
        html: `<h1>Device details</h1>
        <h2> name:${req.body.name} </h2><br>
        <h2> devType:${req.body.devType} </h2><br>
        <h2> currentState:${req.body.currentState} </h2><br>
        <h2> lastUpdated:${req.body.lastUpdated} </h2><br>`
    }; 

    
    const mailSent = mailTransporter.sendMail(mailDetails, function(err, data) { 
        if(err) { 
            console.log(err); 
        } else { 
            return res.send({Success : 'Email sent successfully'});
        } 
    }); 

    

}