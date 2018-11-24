export const ListUsers = `
    query ListUsers {
        listUsers {
            items {
                id
                username
                createdAt
            }
        }
    }
`

export const GetUser = `
    query GetUser($id: ID!) {
        getUser(id: $id) {
            id
            username
        }
    }
`

export const GetUserAndConversations = `
  query GetUserAndConversations($id:ID!) {
    getUser(id:$id) {
      id
      username
      conversations(limit: 100) {
        items {
          id
          conversation {
            id
            name
          }
        }
      }
    }
  }
`

export const GetConvo = `
  query GetConvo($id: ID!) {
    getConvo(id:$id) {
      id
      name
      members
      messages(limit: 100) {
        items {
          id
          content
          authorId
          messageConversationId
          createdAt
        }
      }
      createdAt
      updatedAt
    }
  }
`
