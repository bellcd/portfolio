import React from 'react';
import { Link } from 'gatsby';

export default () => {
  const links = ['About', 'Apps', 'Contact', 'Resume'].map((name, i) => {
    return <Link to={`/${name.toLowerCase()}`} key={i}>{name}</Link>
  });
  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  );
};