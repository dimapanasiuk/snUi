import { gql } from '@apollo/client'

export const CREATE_USER = gql`
  mutation createUser($input: UserInput) {
      createUser(input: $input) {
          id, username, age, password, email
      }
  }
`

export const ADD_TODO = gql`
  mutation addNewTodo($input: UserInput) {
    addNewTodo(input: $input) {
        username
        email
        todos {
          id
          title
          content
        }
    }
  }
`
