import gql from "graphql-tag";
import { query } from "svelte-apollo";

export const CURRENT_USER = gql`
  {
    currentUser {
      id
      email
    }
  }
`;

export interface User {
  id: string;
  email: string;
}

export interface CurrentUserQueryResult {
  currentUser: User | null;
}

export const currentUserQuery = () =>
  query<CurrentUserQueryResult>(CURRENT_USER);
