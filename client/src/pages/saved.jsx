import React, { Component } from "react";
//import components with which to build this page

class Saved extends Component {
  //component did mount
  // ajax call to api which will call to the DB to return all books
  // it will set the state to the books that were stored in the array, array of objects will be rendered by the render method because the state was changed
  render() {
    return <h1>Hello World! Saved</h1>;
  }
}

export default Saved;
