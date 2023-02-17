import React, { useState } from 'react';
import "./join.css"
import logo from '../../assets/logo.png'
import {Link} from "react-router-dom"


let  user; 

const sendUser = () => {
  user = document.getElementById('joinInput').value;
  document.getElementById('joinInput').value = "";
}

const Join = () => {

  const [name ,setName] = useState("");

  return (
    <div className='joinPage'>
        <div className='joinContainer'>
            <img src={logo} alt='logo'/>
            <h1>my-chat</h1>
         <input onChange={(e) => setName(e.target.value)} placeholder="Enter Your Name" type="text" id="joinInput" />
                <Link onClick={(event) => !name ? event.preventDefault() : null} to="/chat">  <button onClick={sendUser} id="joinbtn">Log In</button></Link>
           
        </div>
    </div>
  )
}

export default Join
export {user}