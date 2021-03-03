import { gql } from '@apollo/client';

const GET_ALL_USERS = gql`
  query {
      getAllUsers {
        id, username, age,
      }
  }
`

export { GET_ALL_USERS };