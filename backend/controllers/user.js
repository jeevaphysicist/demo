const data = require('../models/userdata.json');
const data2 = require('../models/userdata2.json');



exports.userdata = (req,res)=>{
    res.status(200).json({
        message:"this is json object!!!",
        data:data
    })
}

exports.userdetails = (req,res)=>{
    console.log(req.body);
    
    res.status(200).json({
        message:"this is post method",
        data:data2
    })
}