const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const http = require('http');
const server = http.createServer(app);
const {Server} = require('socket.io');
const io = new Server (server,{ maxHttpBufferSize: 1e8});



const routes = require("./routes/firstroute");
const route2 = require('./routes/secondroute');
const fs = require('fs');
const PORT = 8080 ;
 

app.get('/',(req,res)=>{
    res.sendFile(__dirname + '/index.html');
})

io.on('connection', (socket) => {
    console.log(`${socket.id} a user connected`);

    socket.on("upload", (file, callback) => {
        console.log(file); // <Buffer 25 50 44 ...>
        
    
        // save the content to the disk, for example
        fs.writeFile("/tmp/upload.txt", file, (err) => {
          callback({data:file});
        });
      });


    socket.on('disconnect',()=>{
        console.log(`${socket.id} a user disconnected`);
    })
  });

    // middle wares

app.use(bodyParser.json());

app.use('/api',routes);

app.use('/api/second',route2);



server.listen(PORT,()=>{
    console.log(`server running on PORT ${PORT}`);
});


