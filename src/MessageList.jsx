import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        const messages = this.props.usersMessage.map((message, index) => {
            console.log("🤗 message: ", message)
            return <Message
            key={index}
            username={message.username}
            content={message.content}/>
        })
        return(
            <section className="Messages">{messages}</section>
        )
    }
}



export default MessageList;