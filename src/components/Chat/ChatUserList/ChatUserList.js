import React, { Component } from 'react';
import { graphqlOperation } from 'aws-amplify';
import { Connect } from "aws-amplify-react";
import AuthContext from '../../../AuthContext';
import * as queries from '../../../graphql/queries';
import * as subscriptions from '../../../graphql/subscriptions';
import { createConvo } from '../../../mutationHelper';
import './ChatUserList.css';

class ChatUserList extends Component {
    static contextType = AuthContext;
    render() {
        const username = this.context ? this.context.username : null;
        return (
            <div>
                <div className="section-header">
                    <h6 className='mb-0'><i className="ion-ios-person" data-pack="default" data-tags="talk" /> Users</h6>
                </div>
                <div className="user-list">
                    <div className="list-group">
                        <Connect
                            query={graphqlOperation(queries.ListUsers)}
                            subscription={graphqlOperation(subscriptions.OnCreateUser)}
                            onSubscriptionMsg={(prev, { onCreateUser }) => {
                                prev.listUsers.items.push(onCreateUser);
                                return prev;
                            }}
                        >
                            {({ data, loading, error }) => {
                                const { listUsers } = data || { listUsers: { items: [] } }
                                if (error) return (<h3>Error: {error}</h3>);
                                if (loading || !listUsers) return (<h3>Loading...</h3>);
                                const validUsers = listUsers.items.filter(user => user.id !== username)
                                const noUsers = validUsers.length === 0;
                                if (noUsers) {
                                    return (
                                        <div>
                                            <br/>
                                            <div className="alert alert-success" role="alert">
                                                It looks lonely here... Sign up another user
                                            </div>
                                        </div>
                                    )
                                }
                                return validUsers.map((user, i) => (
                                    <a href='#'
                                        key={i}
                                        className="list-group-item list-group-item-action p-3 border-0"
                                        onClick={() => this.createNewConversation(user)}>
                                        {user.username}
                                    </a>
                                ));
                            }}
                        </Connect>
                    </div>
                </div>
            </div>
        );
    }

    createNewConversation = async (user) => {
        await createConvo(user.username, this.context.username)
    }
}

export default ChatUserList;
