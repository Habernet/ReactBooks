import React, { Component } from "react";
import "./App.css";
// import React Router
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
//import pages
import search from "./pages/search";
import saved from "./pages/saved";

class App extends Component {
  render() {
    return (
      <>
        {/* <Navbar /> */}
        {/* Add your router here to dynamically render each page depending on
        which route is hit */}
        <Router>
          <nav>
            <div className="nav-wrapper">
              <ul>
                <li>
                  <Link to="/search">Search</Link>
                </li>
                <li>
                  <Link to="/saved">Saved</Link>
                </li>
              </ul>
            </div>
          </nav>
          <Route path="/search" exact component={search} />
          <Route path="/saved" exact component={saved} />
        </Router>
      </>
    );
  }
}

export default App;
