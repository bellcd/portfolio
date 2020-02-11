import React from 'react';
import Nav from './nav';
import { Link } from 'gatsby';

export default () => {
  return (
    <header>
      <Link to="/">
        <h1>Christian Bell</h1>
      </Link>
      <Nav></Nav>
    </header>
  );
};