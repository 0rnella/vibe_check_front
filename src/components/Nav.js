import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Nav.scss';

function Nav (props) {
  return (
    <nav className="main-nav">
      <Link to='/'>Home</Link>
      <Link to='/about'>About</Link>
    </nav>
  );
}

export default Nav;