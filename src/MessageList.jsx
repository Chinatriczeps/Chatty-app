import React, {Component} from 'react';
import Message from './Message.jsx';

class MessageList extends Component {
    render() {
        const messages = this.props.usersMessage.map(message => {
            return <Message
            key={message.id}
            user={message.username}
            content={message.content}/>
        })
        return(
            <section className="Messages">{messages}</section>
        )
    }
}



export default MessageList;