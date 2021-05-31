import { gql } from '@apollo/client';

const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
      createUser(input: $input) {
        id, username, password,age
      }
  }
`

export { CREATE_USER };