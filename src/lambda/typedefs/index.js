const { gql } = require("apollo-server-lambda");

module.exports = gql`

  type StatusResponse{
    status: String
  }

  type LoginOutput{
    status:String,
    token:String
  }

  type Query {
    getStatus: StatusResponse
  }

  type Mutation {
    login(email: String!, password: String!): LoginOutput
  }

`;