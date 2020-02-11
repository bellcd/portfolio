import React from 'react';

const NavLink = ({ name }) => {
  return (
    <a href={`#${name}`}>
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
        {/* <li>About</li>
        <li>Apps</li>
        <li>Contact</li>
        <li>Resume</li> */}
        {links}
      </ul>
    </nav>
  );
};