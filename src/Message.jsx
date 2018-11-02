import React, {Component} from 'react';


function Message(props) {
  console.log(props.content)
  return (
    <main className="messages">
    <div className="message">
      <span className="message-username">{props.username}</span>
      <span className="message-content">{props.content}</span>
    </div>
    {/* <div className="message-system">
      {props.content}
    </div>   */}
  </main> 
  );
}

export default Message;