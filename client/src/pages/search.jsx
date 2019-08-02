import React, { Component } from "react";
//import components with which to build this page
import BookSearch from "../components/BookSearch/booksearch";
import { Link } from "react-router-dom";
import { List, ListItem } from "../components/List/list";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // A function to parse the api response and build an object to set to the state?

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.title) {
      API.searchBook({
        title: this.state.title
      }).then(res =>
        this.setState({
          books: [
            {
              title: res.data.items[0].volumeInfo.title,
              authors: res.data.items[0].volumeInfo.authors,
              synopsis: res.data.items[0].searchInfo.textSnippet
            }
          ]
        })
      );
    }
  };

  render() {
    return (
      <>
        <BookSearch
          value={this.state.title}
          onChange={this.handleInputChange}
          formSubmit={this.handleFormSubmit}
          name="title"
          placeholder="Title (required)"
        />
        <div>
          {this.state.books.length ? (
            <List>
              {this.state.books.map(book => (
                <ListItem key={book.title}>
                  <h3>{book.title}</h3>
                  <h4>{book.authors}</h4>
                  <h4>{book.synopsis}</h4>
                  {/* <strong>
                    {book.title} by {book.authors}....synopsis: {book.synopsis}
                  </strong> */}
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>No Results to Display</h3>
          )}
        </div>
      </>
    );
  }
}

export default Search;
