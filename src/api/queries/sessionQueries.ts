import gql from "graphql-tag";
import { query } from "svelte-apollo";
import type { User } from "../interfaces/users";

export const CURRENT_USER = gql`
  {
    currentUser {
      id
      email
    }
  }
`;

export interface CurrentUserQueryResult {
  currentUser: User | null;
}

export const currentUserQuery = () =>
  query<CurrentUserQueryResult>(CURRENT_USER);
