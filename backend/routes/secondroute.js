const express = require('express');
const router = express.Router();

router.get('/',(req,res)=>{
    res.status(200).send("this is get method");
});

router.get("/secondget",(req,res)=>{
    res.status(200).send("get method two");
})


module.exports = router ;