import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="left brand-logo">Logo</a>
          <ul className="right">
            <li><a href="sass.html">Login</a></li>
            <li><a href="badges.html">SignUp</a></li>
          </ul>
          </div>
      </nav>

    );
  }
}

export default Header;