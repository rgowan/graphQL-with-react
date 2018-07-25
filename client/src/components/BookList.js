import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBooksQuery } from '../queries/queries';

import BookDetails from './BookDetails';

class BookList extends Component {
  state = {
    selectedBookId: null
  }

  displayBooks = () => {
    const data = this.props.data;

    if (data.loading) {
      return (<li>Loading books...</li>);
    }

    return data.books.map(book =>
      <li onClick={() => this.setState({ selectedBookId: book.id })} key={ book.id }>{ book.name }</li>
    )
  }

  render() {
    return (
      <div>
        <ul id="book-list">
          { this.displayBooks() }
        </ul>
        <BookDetails bookId={ this.state.selectedBookId }/>
      </div>
    );
  }
}

export default graphql(getBooksQuery)(BookList);
