import * as mutations from './graphql/mutations';
import { graphqlOperation, Analytics, API } from 'aws-amplify';

const assertErrors = (response) => {
    if (response && response.errors && response.errors.length > 0) {
        throw new Error(response.errors.join('\n'))
    }
}

export const createUser = async (user) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.CreateUser, { user })
        );
        assertErrors(response);
        return response.data.createUser;
    } catch (e) {
        Analytics.record({
            name: 'CreateUserError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createConvo = async (user1, user2) => {
    try {
        const members = [user1, user2].sort()
        const conversationName = members.join(' and ');
        const conversationResponse = await API.graphql(
            graphqlOperation(
                mutations.CreateConvo, { 
                    input: {
                        name: conversationName,
                        members
                    }
                }
            )
        );
        assertErrors(conversationResponse);
        const userConversation1Response = await API.graphql(
            graphqlOperation(
                mutations.CreateConvoLink, {
                    input: {
                        convoLinkUserId: user1,
                        convoLinkConversationId: conversationResponse.data.createConvo.id
                    }
                }
            )
        );
        assertErrors(userConversation1Response);
        const userConversation2Response = await API.graphql(
            graphqlOperation(
                mutations.CreateConvoLink, {
                    input: {
                        convoLinkUserId: user2,
                        convoLinkConversationId: conversationResponse.data.createConvo.id
                    }
                }
            )
        );
        assertErrors(userConversation2Response);
    } catch (e) {
        Analytics.record({
            name: 'CreateConvoError',
            attributes: {
                error: e.message
            }
        })
    }
}

export const createMessage = async (message) => {
    try {
        const response = await API.graphql(
            graphqlOperation(mutations.CreateMessage, { input: message })
        );
        assertErrors(response);
        return response.data.createMessage;
    } catch (e) {
        Analytics.record({
            name: 'CreateMessageError',
            attributes: {
                error: e.message
            }
        })
    }
}