// --------------------------------------------------Requiring other files-----------------------------------------------
import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';
// ----------------------------------------------------Parent class/root node---------------------------------------------
class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      username: {name: "Anonymous"},
      messages: [],
      usersOnline: 0
      };

      this.addMessage = this.addMessage.bind(this);
      this.changeUser = this.changeUser.bind(this);
  }
// -------------------------------------------------Send message Function-------------------------------------------------
  addMessage(newMessage) {
    const smthNew = {
      type: "incomingMessage",
      username: this.state.username.name,
      content: newMessage
    }
    console.log(smthNew);
  this.socket.send(JSON.stringify(smthNew));
}
// ------------------------------------------------Change Username Function-----------------------------------------------
changeUser(newUsername) { 
  this.setState({
    username: {
      name: newUsername
    }
  })
  this.socket.send(JSON.stringify({content: this.state.username.name + ' changed name to ' + newUsername}))             
}
// ----------------------------------------------------Component Did Mount-------------------------------------------------
  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');

    this.socket.onopen = (event) => {
      console.log("Connected to server");
    };
  
    this.socket.onmessage = (message) => {
      console.log("Socket message", message)
  
      let parser = JSON.parse(message.data);
  
      if (parser.type === "onlineUsers"){
        this.setState({usersOnline: parser.content})
  
      } else {
      const newMessages = this.state.messages.concat(parser)
      this.setState({messages: newMessages})
      }
    }
  }
// // -------------------------------------------------------Render XML-----------------------------------------------------
  render() {
    return (
      <div>
        <nav className="navbar">
          <a href="/" className="navbar-brand">Chatty</a>
        <span className="users-connected">Users Online: {this.state.usersOnline} </span>
        </nav>
        <MessageList usersMessage = {this.state.messages}/>
        <ChatBar addMessage={this.addMessage} changeUser={this.changeUser} currentUser={this.state.username.name}/>
      </div> 
    );
  }
}
export default App;