const express = require('express');
const bodyParser = require('body-parser');

const PORT = 8080 ;
const app = express();


// middle wares

app.use(bodyParser.json());


app.get('/',(req,res)=>{
    res.send("hi this get method !!!");
});

app.get('/hi',function(req,res){
    res.send("hi this get method  2!!!");
});
app.post('/post',function(req,res){
          console.log(req.body);
     
    res.send("hi this this is post method  !!!");
});
app.post('/post2',function(req,res){
    console.log(req.body);

res.send("hi this this is post method  2 !!!");
});




app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});