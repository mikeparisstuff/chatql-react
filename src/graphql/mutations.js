export const CreateUser = `mutation CreateUser($user: CreateUserInput!) {
    createUser(input: $user) {
        id
        username
    }
}`

export const CreateConvoLink = `
  mutation CreateConvoLink($input: CreateConvoLinkInput!) {
    createConvoLink(input: $input) {
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

export const CreateConvo = `
  mutation CreateConvo($input: CreateConversationInput!) {
    createConvo(input: $input) {
      id
      name
      members
    }
  }
`

export const CreateMessage = `
  mutation CreateMessage($input: CreateMessageInput!) {
    createMessage(input:$input) {
      id
      content
      authorId
      messageConversationId
      createdAt
    }
  }
`
