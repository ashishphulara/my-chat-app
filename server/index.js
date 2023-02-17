const http = require("http");
const express = require("express");
const cors = require("cors");
const socketIO = require("socket.io");

const app = express();
const port = 8081 || process.env.PORT

const users = [{}]

app.use(cors());
app.get("/",(req,res)=>{
    res.send("hello world");
});

const server = http.createServer(app);
const io = socketIO(server);

io.on("connection",(socket)=>{
    console.log("new connection")

    socket.on("joined",({user})=>{
       users[socket.id] = user ; 
console.log(`${user} has joined`)

socket.broadcast.emit("userJoined",{user:"Admin",message: `${users[socket.id]} has joined`})

socket.emit("Welcome",{user:"Admin",message:`Welcome to the chatroom , ${users[socket.id]}`})
});

socket.on("message",({message , id})=>{
    io.emit("sendMessage" , {user:users[id],message ,id})
})

socket.on("disconnected", ()=>{
    socket.broadcast.emit("userLeft",{user:"Admin :",message :`${users[socket.id]} has left the room`})
    console.log("user has left")
})
    }); 

server.listen(port,()=>{console.log(`server is running on http://localhost:${port}`)})





