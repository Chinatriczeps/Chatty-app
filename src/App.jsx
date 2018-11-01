import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';
import data from '../data.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      currentUser: {name: "Bob"},
      messages: []
      };

      this.textEnter = this.textEnter.bind(this);
  }

  textEnter(newMessage) {
      const smthNew = {
        username: this.state.currentUser.name,
        content: newMessage
      }
      console.log(smthNew);
    this.socket.send(JSON.stringify(smthNew));
  }


  componentDidMount() {
    this.socket = new WebSocket('ws://localhost:3001/');
    this.socket.addEventListener("message", message => {
      const messageContent = JSON.parse(message.data);
      const newMessage = this.state.messages.concat(messageContent);
      this.setState({messages: newMessage});
    })
    setTimeout(() => {
      this.setState({loading:false})
    }, 1000);
    // setTimeout(() => {
    //   const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
    //   const messages = this.state.messages.concat(newMessage);
    //   this.setState({messages: messages})
    // }, 1000);
  }
  
  render() {
    if(this.state.loading) {
      return <h1> Loading... </h1>
    } else {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <ChatBar textEnter={this.textEnter} chatUser = {this.state.currentUser.name}/>
          <MessageList usersMessage = {this.state.messages}/>
        </div> 
      );
    }
  }
}
export default App;