// gql - comes from apollo-boost module, used to graphQL.
import { gql } from 'apollo-boost';

export const getAuthorsQuery = gql`
  {
    authors {
      id
      name
    }
  }
`;

export const getBooksQuery = gql`
  {
    books {
      name
      id
    }
  }
`;

export const getBookQuery = gql`
  query($id: ID){
    book(id: $id) {
      id
      name
      genre
      author {
        id
        name
        age
        books {
          id
          name
        }
      }
    }
  }
`;

export const addBookMutation = gql`
  mutation($name: String!, $genre: String!, $authorId: ID!) {
    addBook(name: $name, genre: $genre, authorId: $authorId) {
      id
      name
    }
  }
`;