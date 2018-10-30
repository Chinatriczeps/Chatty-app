import React, {Component} from 'react';
import ChatBar from './ChatBar.jsx';
import MessageList from './Messagelist.jsx';
import data from '../data.json';


class App extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      loading: true,
      data
      };
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({loading: false});
    }, 3000)
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
          <ChatBar chatUser = {this.state.data}/>
          <MessageList usersMessage = {this.state.data.messages}/>
        </div> 
      );
    }
  }
}
export default App;