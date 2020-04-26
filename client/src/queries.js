import { gql } from '@apollo/client';

const GET_BOOKS = gql`
  {
    books {
		id
      name
      genre
		author{
			name
		}
    }
  }
`;

const ADD_BOOK = gql`
	mutation AddBook($name: String!, $genre: String!, $authorId: ID!){
			addBook(name: $name, genre: $genre, authorId: $authorId){
				name
			}		
	}
`;

export { GET_BOOKS, ADD_BOOK }