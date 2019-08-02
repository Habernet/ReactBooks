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
        {/* Add your router here to dynamically render each page depending on
        which route is hit */}
        <Router>
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <a className="navbar-brand">Google / React Books!</a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <Link className="nav-link" to="/search">
                    Search
                  </Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/saved">
                    Saved
                  </Link>
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
