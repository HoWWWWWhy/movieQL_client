import gql from 'graphql-tag';

export const HOME_PAGE = gql`
  {
    movies(limit:50, minRating: 8.0) {
      id
      title
      rating  
      medium_cover_image
    }
  }
`;

