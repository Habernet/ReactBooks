import React, { Component } from "react";

const Navbar = props => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a href="#" class="brand-logo">
          Google Search
        </a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a href="">Search</a>
          </li>
          <li>
            <a href="">Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
