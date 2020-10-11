import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Header (props) {
  return(<header className='main-header'>
    <Link to='/'><h1>Vibe Check</h1></Link>
    <Nav />
  </header>);
}

export default Header;