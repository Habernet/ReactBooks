import React, { Component } from "react";
//import components with which to build this page
import BookSearch from "../components/BookSearch/booksearch";
import { List, ListItem } from "../components/List/list";
import AddBtn from "../components/AddBtn/addbtn";
import ViewBtn from "../components/ViewBtn/viewbtn";
import API from "../utils/API";

class Search extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  // A function to parse the api response and build an object to set to the state?
  apiResponseParser = response => {
    // Initialize the parsed array
    let parsedArray = [];

    let filteredArray = response.data.items.filter(
      item => item.volumeInfo.description
    );

    // Loop through response.items and build an object to be pushed to the new array
    filteredArray.forEach(item => {
      parsedArray.push({
        title: item.volumeInfo.title.toString(),
        authors: item.volumeInfo.authors.toString(),
        synopsis: item.volumeInfo.description || "No synopsis available!",
        image: item.volumeInfo.imageLinks.thumbnail,
        link: item.volumeInfo.canonicalVolumeLink,
        id: item.id
      });
    });
    // return the new array
    return parsedArray;
  };

  handleAddClick = book => {
    API.saveBook({
      title: book.title,
      authors: book.authors,
      synopsis: book.synopsis,
      image: book.image,
      link: book.link,
      id: book.id
    })
      .then(res => console.log)
      .catch(err => console.log(err));
  };

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
      }).then(res => {
        this.setState({
          books: this.apiResponseParser(res)
        });
      });
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
                <ListItem key={book.id}>
                  <h3>{book.title}</h3>
                  <h4>{book.authors}</h4>
                  <p>{book.synopsis}</p>
                  <img src={book.image} alt={book.title} />
                  <ViewBtn link={book.link} />
                  <br />
                  <AddBtn onClick={() => this.handleAddClick(book)} />
                </ListItem>
              ))}
            </List>
          ) : (
            <h3>Search for some books!</h3>
          )}
        </div>
      </>
    );
  }
}

export default Search;
