export const OnCreateUser = `
    subscription OnCreateUser {
        onCreateUser {
            id
            username
            createdAt
        }
    }
`

export const OnCreateUserConversation = `
  subscription OnCreateUserConversation($userId: ID!) {
    onCreateConvoLink(convoLinkUserId:$userId) {
      id
      convoLinkUserId
      convoLinkConversationId
      conversation {
        id
        name
      }
    }
  }
`

export const OnCreateMessage = `
  subscription OnCreateMessage($conversationId: ID!) {
    onCreateMessage(messageConversationId: $conversationId) {
      id
      content
      authorId
      messageConversationId
      createdAt
    }
  }
`