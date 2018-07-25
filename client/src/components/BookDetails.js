import React, { Component } from 'react';
import { graphql } from 'react-apollo';

import { getBookQuery } from '../queries/queries';

class BookDetails extends Component {
  displayBookDetails = () => {
    const { book } = this.props.data;

    if (!book) {
      return (<div>No Book selected...</div>)
    }

    return (
      <div>
        <h2>{ book.name }</h2>
        <p>{ book.genre }</p>
        <p>{ book.author.name }</p>
        <p>All books by { book.author.name }</p>
        <ul className="other-books">
          { book.author.books.map(book =>
            <li key={ book.id }>{ book.name }</li>
          )}
        </ul>
      </div>
    )
  }

  render() {
    return (
      <div id="book-details">
        { this.displayBookDetails() }
      </div>
    );
  }
}

export default graphql(getBookQuery, {
  options: (props) => ({
    variables: {
      id: props.bookId
    }
  })
})(BookDetails);