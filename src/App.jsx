import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';
import data from '../data.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      // loading: true,
      currentUser: data.currentUser,
      messages: data.messages
      };
  }

  componentDidMount() {
    // setTimeout(() => {
    //   this.setState({loading:false})
    // },1000);
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 3, username: "Michelle", content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage);
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  
  render() {
    // if(this.state.loading) {
    //   return <h1> Loading... </h1>
    // } else {
      return (
        <div>
          <nav className="navbar">
            <a href="/" className="navbar-brand">Chatty</a>
          </nav>
          <ChatBar chatUser = {this.state.currentUser.name}/>
          <MessageList usersMessage = {this.state.messages}/>
        </div> 
      );
    }
  // }
}
export default App;