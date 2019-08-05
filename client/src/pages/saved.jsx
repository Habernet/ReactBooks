import React, { Component } from "react";
import API from "../utils/API";
//import components with which to build this page
import Container from "../components/Container/container";
import { List, ListItem } from "../components/List/list";
import DeleteBtn from "../components/DeleteBtn/deletebtn";

class Saved extends Component {
  state = {
    books: []
  };

  loadSavedBooks = () => {
    API.getBooks()
      .then(res => {
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  };

  componentDidMount() {
    this.loadSavedBooks();
  }

  handleDeleteClick = bookId => {
    API.deleteBook(bookId)
      .then(res => {
        this.loadSavedBooks();
      })
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book.id}>
                <h3>{book.title}</h3>
                <h4>{book.authors}</h4>
                <p>{book.synopsis}</p>
                <img src={book.image} alt={book.title} />
                <button href={book.link} className="btn btn-info">
                  View Book
                </button>
                <DeleteBtn onClick={() => this.handleDeleteClick(book.id)} />
                <br />
              </ListItem>
            ))}
          </List>
        ) : (
          <h3>No books are saved!</h3>
        )}
      </Container>
    );
  }
}

export default Saved;
