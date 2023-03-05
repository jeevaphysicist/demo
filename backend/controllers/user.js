const data = require('../models/userdata.json');
const data2 = require('../models/userdata2.json');
const fs = require('fs');



exports.userdata = (req,res)=>{
    res.status(200).json({
        message:"this is json object!!!",
        data:data
    })
}

exports.updatedata =(req,res)=>{
    data.splice(0,0,req.body);
    let da = JSON.stringify(data);
     fs.writeFileSync('C:/webapp/practice_MERN/demo/backend/models/userdata.json',da);
      
     let result = fs.readFileSync('C:/webapp/practice_MERN/demo/backend/models/userdata.json','utf-8');
     res.status(201).json({
        message:"datra",
        data:JSON.stringify(result)
     })
    
}

exports.userdetails = (req,res)=>{
    console.log(req.body);
    
    res.status(200).json({
        message:"this is post method",
        data:data2
    })
}