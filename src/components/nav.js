import React from 'react';

const NavLink = ({ name }) => {
  return (
    <a href={`#${name.toLowerCase()}`}>
      <li>{name}</li>
    </a>
  );
};

export default () => {
  const links = ['About', 'Apps', 'Contact', 'Resume'].map((name, i) => {
    return <NavLink name={name} key={i} />;
  });
  return (
    <nav>
      <ul>
        {links}
      </ul>
    </nav>
  );
};