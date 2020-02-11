import React from "react"
import Nav from '../components/nav';
import About from '../components/about';
import Apps from '../components/apps';
import Contact from '../components/contact';
import Resume from '../components/resume';

export default () => {
  return (
    <div className="wrapper">
      <header>
        <h1>Christian Bell</h1>
        <Nav></Nav>
      </header>
      <About />
      <Apps />
      <Contact />
      <Resume />
      <footer>
        Made with <span role="img" aria-label="heart">❤️</span> by <a href="https://bellcd.github.io/">Christian Bell</a>
      </footer>
    </div>
  );
};



