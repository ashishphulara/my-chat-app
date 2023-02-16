import React from 'react'
import "./message.css"

const Message = ({ user, message, clas }) => {
    if (user) {
        return (
            <div className={`messageBox ${clas}`}  >
                {`${user}: ${message}`}
            </div>
        )
    }
    else {


        return (
            <div className={`messageBox ${clas}`}>
                {`You: ${message}`}
            </div>
        )
    }
}


export default Message