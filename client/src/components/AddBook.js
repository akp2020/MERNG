import React from 'react';
import { useMutation } from '@apollo/client';
import {ADD_BOOK, GET_BOOKS} from '../queries';

function AddBook() {
	let name, genre, authorId;
  const [addBook, { data }] = useMutation(ADD_BOOK);

  return (
    <div id="addBooks">		
      <form
        onSubmit={e => {
          e.preventDefault();
          addBook({ variables: { name: name.value,
			genre: genre.value,
			authorId: authorId.value},
			refetchQueries: [{ query: GET_BOOKS }] 
			});
			
          /*name.value = '';
		 genre.value = '';
		authorId.value = '';*/
        }}
      >
        <input
          ref={node => {
            name = node;
          }}
		placeholder="Add name"
        />
		<input
          ref={node => {
            genre = node;
          }}
		placeholder="Add genre"
        />
		<input
          ref={node => {
            authorId = node;
          }}
		placeholder="Add authorId"
        />
        <button type="submit" className="btn btn-primary">Add Book</button>
      </form>
    </div>
  );
}

export default AddBook;
