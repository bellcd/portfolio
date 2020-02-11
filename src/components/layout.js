import React from 'react';
import Header from './header';

export default ({ children }) => {
  return (
    <div className="wrapper">
      <Header></Header>
      {children}
      <footer>
        Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://bellcd.github.io/">Christian Bell</a>
      </footer>
    </div>
  );
};