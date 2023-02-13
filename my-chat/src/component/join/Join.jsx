import React from 'react';
import "./join.css"
import logo from '../../assets/logo.png'

const Join = () => {
  return (
    <div className='joinPage'>
        <div className='joinContainer'>
            <img src={logo} alt='logo'/>
            <h1>my-chat</h1>
        </div>
    </div>
  )
}

export default Join