import React, {Component} from 'react';

class ChatBar extends Component {
  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.addMessage(e.target.value);
    }
  }

  handleUserName(e) {
    if(e.key === 'Enter') {
      this.props.changeUser(e.target.value);
    }
  }
  render(){
    return (
      <footer className="chatbar" >
        <input type="text" className="chatbar-username" placeholder="Your name (Optional)" onKeyPress={this.handleUserName.bind(this)}/>
        <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress.bind(this)}/>
      </footer>
    );
  }
}

export default ChatBar;