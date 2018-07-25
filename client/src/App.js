import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import BookList from './components/BookList';
import AddBook from './components/AddBook';

// creating a new instance of an apollo client, specifing the endpoint on which requests should be made to.
const client = new ApolloClient({
  uri: 'http://localhost:4000/graphql'
});

class App extends Component {
  render() {
    return (
      // ApolloProdiver -> `react-apollo` must wrap the root component which will allow requests to be made.
      <ApolloProvider client={client}>
        <div id="main">
          <h1>GraphQL Books</h1>
          <AddBook />
          <BookList />
        </div>
      </ApolloProvider>
    );
  }
}

export default App;
