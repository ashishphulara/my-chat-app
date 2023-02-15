import React, { useEffect } from 'react'
import {user} from "../join/Join";
import socketIo from "socket.io-client";
import "./Chat.css";
import sendImg from "../../assets/send.png"

const ENDPOINT = "http://localhost:8081/";

const Chat = () => {

 const socket = socketIo(ENDPOINT, { transports: ['websocket'] });

   useEffect(() => {
     socket.on('connect', () => {
            // alert('Connected');
        })
   
     return () => {
      
     }
   }, [socket])
   
    

  return (
    <div className='chatPage'>
        <div className='chatContainer'>
            <div className='chatHeader'></div>
            <div className='chatBox'></div>
            <div className='inputBox'>
                <input type="text" id='chatInput' />
                <button className='sendBtn'  ><img src={sendImg} alt='send' /></button>
            </div>
        </div>
        <h1>{user}</h1>
    </div>
  )
}

export default Chat