import { gql } from "@apollo/client";
// prettier-ignore
export const GET_ALL_USERS = gql`
  query {
    getAllUsers{
      id,
      age,
      username,
      posts {
        id
      }
    }
  }
`;

export const GET_ONE_USER = gql`
  query getUser($id: ID) {
    getUser(id: $id) {
      id
      username
    }
  }
`;
