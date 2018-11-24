import React, { Component } from 'react';
import { Auth } from 'aws-amplify';
import './Chat.css';
import ChatUserList from './ChatUserList';
import ChatConversationList from './ChatConversationList';
import ChatMessageView from './ChatMessageView';
import ChatInput from './ChatInput';
import AuthContext from '../../AuthContext'

class Chat extends Component {
    static contextType = AuthContext;

    constructor(props) {
        super(props);
        this.state = {
            selectedConversation: null
        }
    }

    render() {
        const currentUser = this.context;
        return (
            <div className="container-fluid h-100">
                <div className="row justify-content-center h-100">
                    <div className="col-sm-4">
                        <div className="left-pane">
                            <div className="row justify-content-center h-50">
                                <div className="col-sm-12">
                                    <ChatUserList />
                                </div>
                            </div>
                            <div className="row justify-content-center h-50">
                                <div className="col-sm-12">
                                    <ChatConversationList onChatSelected={this.changeConversation} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="col-sm-8" id="chat">
                        <ChatMessageView conversation={this.state.selectedConversation} />
                        <ChatInput conversation={this.state.selectedConversation} />
                    </div>
                </div>
            </div>
        );
    }

    changeConversation = (conversation) => {
        this.setState({
            selectedConversation: conversation
        });
    }
}

export default Chat;
