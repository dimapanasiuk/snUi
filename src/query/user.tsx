import { gql } from '@apollo/client';

const GET_ALL_USERS = gql`
  query {
    findAllUser {
      _id, name, email, password
    }
  }
`

export { GET_ALL_USERS };