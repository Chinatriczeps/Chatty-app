import React, {Component} from 'react';

class ChatBar extends Component {
  render(){
    return (
      <footer className="chatbar">
        <input className="chatbar-username" placeholder={this.props.chatUser}/>
        <input className="chatbar-message" placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default ChatBar;