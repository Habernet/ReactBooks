import React, { Component } from "react";
import "./App.css";
//import components
import Navbar from "./modules/NavBar/navbar";
import BookSearch from "./modules/BookSearch/booksearch";
import JumboTron from "./modules/JumboTron/jumbotron";
import BookContainer from "./modules/BookContainer/bookcontainer";

class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        <JumboTron />
        <BookSearch />
        <BookContainer />
      </>
    );
  }
}

export default App;
