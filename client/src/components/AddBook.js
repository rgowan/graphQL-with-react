import React, { Component } from 'react';
import { graphql, compose } from 'react-apollo';

import {
  getAuthorsQuery,
  getBooksQuery,
  addBookMutation
} from '../queries/queries';

class AddBook extends Component {
  state = {
    book: {
      name: '',
      genre: '',
      authorId: ''
    }
  }

  handleFormChange = ({ target: { name, value }}) => {
    const book = Object.assign({}, this.state.book, { [name]: value });
    this.setState({ book });
  }

  handleFormSubmit = (e) => {
    e.preventDefault();

    this.props.addBookMutation({
      variables: {
        ...this.state.book
      },
      refetchQueries: [{ query: getBooksQuery }]
    });
  }

  displayAuthors = () => {
    const data = this.props.getAuthorsQuery;

    if (data.loading) {
      return ( <option disabled>Loading authors...</option> )
    }

    return data.authors.map(author =>
      <option key={ author.id } value={ author.id }>
        { author.name }
      </option>
    )
  }

  render() {
    return (
      <form id="add-book" onSubmit={ this.handleFormSubmit }>
        <div className="field">
          <label>Book Name</label>
          <input name="name" type="text" onChange={ this.handleFormChange }/>
        </div>

        <div className="field">
          <label>Book Genre</label>
          <input name="genre" type="text" onChange={ this.handleFormChange }/>
        </div>

        <div className="field">
          <label>Author</label>
          <select name="authorId" onChange={ this.handleFormChange }>
            <option>Select Author</option>
            { this.displayAuthors() }
          </select>
        </div>

        <button>+</button>
      </form>
    );
  }
}

export default compose(
  graphql(getAuthorsQuery, { name: 'getAuthorsQuery' }),
  graphql(addBookMutation, { name: 'addBookMutation' })
)(AddBook);
