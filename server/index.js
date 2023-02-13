const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIo = require("socket.io");

const app = express();
const port = 8081 || process.env.PORT
app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello world");
});

const server = http.createServer(app);
const io = socketIo(server);

io.on("connection",()=>{
    console.log("new connection") 
});

server.listen(port,()=>{console.log(`server is running on http://localhost:${port}`)})





