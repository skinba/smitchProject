const device_Model = require('../model/device');

module.exports.create_DeviceDetails = async(req,res,next) => {

    try{
        const reqData = {
            name : req.body.name,
            devType : req.body.devType,
            currentState : req.body.currentState,
            lastUpdated : Date.now(),
            user_id : req.body.user_id
        };
    
        const data = new device_Model(reqData);
        const saveData = await data.save();
        return res.send(saveData);
    }

    catch(error){
        return res.send({errorCode : 400,error})
    }
}

module.exports.read_DeviceDetails = async(req,res,next) => {

    try{
        const getData = await device_Model.find({user_id : req.params.id});
        return res.send(getData);
    }

    catch(error){
        return res.send({errorCode : 400,error})
    }
}

module.exports.edit_DeviceDetails = async(req,res,next) => {

    try{
        const editData = await device_Model.findByIdAndUpdate(req.params.id,{
            name : req.body.name,
            devType : req.body.devType,
            currentState : req.body.currentState,
            lastUpdated : Date.now(),
            user_id : req.body.user_id
        });
        return res.send(editData)
    }

    catch(error){
        return res.send({errorCode : 400,error})
    }

}

module.exports.delete_DeviceDetails = async(req,res,next) => {
    
    try{
        const deleteData = await device_Model.findByIdAndDelete(req.params.id);
        return res.send(deleteData)
    }

    catch(error){
        return res.send({errorCode : 400,error})
    }

}

module.exports.change_CurrentState = async(req,res,next) => {

    try{
        const changeData = await device_Model.findByIdAndUpdate(req.params.id,{
            currentState : req.body.currentState
        });
        return res.send(changeData)
    }

    catch(error){
        return res.send({errorCode : 400,error})
    }
}