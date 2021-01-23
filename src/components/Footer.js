import React from 'react';
import { Link } from 'react-router-dom';
import Nav from './Nav';

function Footer (props) {
  return(<footer className='footer'>
    <Nav />
    <p>Made with love, last updated January 2021</p>
  </footer>);
}

export default Footer;