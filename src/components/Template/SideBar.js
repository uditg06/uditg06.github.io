import React from 'react';
import { Link } from 'react-router-dom';

import ContactIcons from '../Contact/ContactIcons';

const { PUBLIC_URL } = process.env; // set automatically from package.json:homepage

const SideBar = () => (
  <section id="sidebar">
    <section id="intro">
      <Link to="/" className="logo">
        <img src={`${PUBLIC_URL}/images/me.jpg`} alt="" />
      </Link>
      <header>
        <h2>Udit Garg</h2>
        <p><a href="mailto:uditgarg501@gmail.com">Email Udit</a></p>
      </header>
    </section>

    <section className="blurb">
      <h2>About</h2>
      <p>
        I am currently at Airtel Africa.
        I am a developer turned Product Manager with a mission of digital inclusion.
        I am trying to bring digital banking services across 14 countries in Africa
        and positively impact the lives of millions of people.
        I have experience taking products from 0 to 1 to the next 1 Mn.
      </p>
      <p>
        I am passionate about digital products, strategy, design, and product management.
        I firmly believe that technology can transform people&apos;s lives for good.
        I have Healthcare, Travel, and Banking domain experience.
      </p>
      <ul className="actions">
        <li>
          {!window.location.pathname.includes('/resume') ? <Link to="/resume" className="button">Learn More</Link> : <Link to="/about" className="button">About Me</Link>}
        </li>
      </ul>
    </section>

    <section id="footer">
      <ContactIcons />
      <p className="copyright">&copy; Udit Garg <Link to="/">gargudit.com</Link>.</p>
    </section>
  </section>
);

export default SideBar;
