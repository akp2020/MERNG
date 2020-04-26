import React from 'react';
import { useQuery } from '@apollo/client';
import {GET_BOOKS} from '../queries';

function BookList() {
	const { error, loading, data } = useQuery(GET_BOOKS);

	if (loading) return <p>Loading...</p>;
	if (error) return <p>Error :(</p>;
	//debugger;
	return (
		<div>
			<h3>All books here !!!</h3>
			<ul>
				{data.books.map(({ name, genre, author, id }) => (
					<li key={id}>{name} {genre} {author.name}</li>
				))}
			</ul>
		</div>
	);
}

export default BookList;
