import React, {Component} from 'react';

class ChatBar extends Component {
  handleKeyPress(e) {
    if(e.key === 'Enter') {
      this.props.textEnter(e.target.value);
    }
  }
  render(){
    return (
      <footer className="chatbar" >
        <input type="text" className="chatbar-username" placeholder={this.props.chatUser}/>
        <input type="text" className="chatbar-message" placeholder="Type a message and hit ENTER" onKeyPress={this.handleKeyPress.bind(this)}/>
      </footer>
    );
  }
}

export default ChatBar;