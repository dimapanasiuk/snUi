import { gql } from '@apollo/client';

const GET_ALL_USERS = gql`
  query {
    findAllUser {
      _id, name, email, password
    }
  }
`;

const GET_ONE_USER = gql`
  query getUser($id: ID){
    getUser(id: $id) {
        id, username
    }
  }    
`;

const GET_LOGIN_INFO = gql`
  query getLoginData($input: LoginData){
    getLoginData(input: $input) {
      username, password
    }
  }    
`;

export { GET_ALL_USERS, GET_ONE_USER, GET_LOGIN_INFO };
