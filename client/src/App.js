import React from 'react';
//import './App.css';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';
import { ApolloProvider } from '@apollo/client';
import BookList from './components/BookList';
import AddBook from './components/AddBook';

const client = new ApolloClient({
	cache: new InMemoryCache(),
	link: new HttpLink({
		uri: 'http://localhost:4000/g'
	})
});

const App = () => (
	<ApolloProvider client={client}>
		<div>
			<AddBook />
		</div>
		<div>
			<BookList />
		</div>
	</ApolloProvider>
);

export default App;
