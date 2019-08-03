import React, { Component } from "react";
import API from "../utils/API";
//import components with which to build this page
import Container from "../components/Container/container";
import { List, ListItem } from "../components/List/list";

class Saved extends Component {
  state = {
    books: []
  };

  componentDidMount() {
    API.getBooks()
      .then(res => {
        console.log(res);
        this.setState({ books: res.data });
      })
      .catch(err => console.log(err));
  }

  render() {
    return (
      <Container>
        {/* <List>
          {this.state.books.map(book => (
            <ListItem key={book.id}>
              <h3>{book.title}</h3>
              <h4>{book.authors}</h4>
              <h4>{book.synopsis}</h4>
              <a>{book.link}</a>
              <br />
            </ListItem>
          ))}
        </List> */}

        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book.id}>
                <h3>{book.title}</h3>
                <h4>{book.authors}</h4>
                <h4>{book.synopsis}</h4>
                <a>{book.link}</a>
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
