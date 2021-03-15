export const schema = gql`
  type User {
    id: String!
    address: String!
    discordId: String!
    authDetail: AuthDetail
    nfts: [Nft]!
    authDetailId: String
  }

  type HaveUserAddress {
    haveUserAddress: Boolean!
  }

  type Query {
    users: [User!]!
    user(id: String!): User
    haveUserAddress(platformId: String!): HaveUserAddress
    userByDiscordId(discordId: String!): User
  }

  input CreateUserInput {
    address: String!
    discordHandle: String!
    authDetailId: String
  }

  input UpdateUserInput {
    address: String
    discordHandle: String
    authDetailId: String
  }

  type Mutation {
    createUser(input: CreateUserInput!): User!
    updateUser(id: String!, input: UpdateUserInput!): User!
    deleteUser(id: String!): User!
  }
`
