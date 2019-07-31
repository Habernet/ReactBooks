import React from "react";
const Navbar = props => {
  return (
    <nav>
      <div class="nav-wrapper">
        <a class="brand-logo">React/Google Books!</a>
        <ul id="nav-mobile" class="right hide-on-med-and-down">
          <li>
            <a>Search</a>
          </li>
          <li>
            <a>Saved</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
