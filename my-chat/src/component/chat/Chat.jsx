import React, { useEffect ,useState } from 'react'
import {user} from "../join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendImg from "../../assets/send.png";
import Message from "../message/Message"
import  ReactScrollToBottom  from "react-scroll-to-bottom"
import img1 from "../../assets/logo.png"
import close from "../../assets/close.png"
import { useNavigate } from 'react-router-dom';



let socket;
const ENDPOINT = "http://localhost:8081/";

const Chat = () => {
  const [id, setId] = useState("");
  const [messages , setMessages]= useState([])
  const navigator  = useNavigate();



  const send = ()=>{
    const message = document.getElementById("chatInput").value;
    socket.emit("message",{message ,id});
    document.getElementById("chatInput").value ="";
  }

  const closeButton =()=>{
    navigator("/");
  }

  console.log(messages)
  useEffect(() => {
      socket = socketIo(ENDPOINT, { transports: ['websocket'] });
     socket.on('connect', () => {
            // alert('Connected');
            setId(socket.id);
        })
        console.log(socket);
        socket.emit("joined",{user})

        socket.on("Welcome",(data)=>{
          setMessages([...messages ,data])
          console.log(data.user , data.message)
        })

        socket.on("userJoined",(data)=>{
          setMessages([...messages ,data])
          console.log(data.user , data.message)
        })

        socket.on("userLeft",(data)=>{
          setMessages([...messages ,data])
          console.log(data.user , data.message)
        })

     return () => {
      socket.emit("disconnected");
      socket.off();
     }
   }, [])

   useEffect(()=>{
    socket.on("sendMessage",(data)=>{
      setMessages([...messages ,data])
      console.log(data.user,data.message,data.id);
    })
    return ()=>{
      socket.off();
    }
   },[messages])
   
    

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='chatHeader'>
              <img src={img1 } alt="closeIcon" id='image1' />
              <img src={close } alt="closeIcon" id='image2' onClick={closeButton} />
            </div>
            <ReactScrollToBottom className='chatBox'>
              {
                messages.map((item , i)=><Message user={item.id===id ? "" :item.user} message={item.message} classs={item.id===id? "left":"right"}/>)
              }
            </ReactScrollToBottom>
            <div className='inputBox'>
                <input onKeyPress={(event)=>event.key==="Enter"?send():null} type="text" id='chatInput'/>
                <button className='sendBtn' onClick={send}  ><img src={sendImg} alt='send' /></button>
            </div>
        </div>
        
    </div>
  )
}

export default Chat