const express = require('express');
const bodyParser = require('body-parser');

const routes = require("./routes/firstroute");
const route2 = require('./routes/secondroute');
const PORT = 8080 ;
const app = express(); 




// middle wares

app.use(bodyParser.json());

app.use('/api',routes);

app.use('/api/second',route2);



app.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});