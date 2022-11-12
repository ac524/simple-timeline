import { gql } from '@apollo/client';

export const QUERY_ME = gql`
  query CurrentUser {
    me {
      timeline {
        _id
        description
        endDate
        isPresent
        name
        startDate
      }
      username
    }
  }
`;
