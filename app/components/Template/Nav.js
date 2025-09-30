import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id='sidebar' className='nav_sidebar'>
    <section id='intro'>
      <Link to='/' className='logo'>
        <img src={`${BASE_PATH}/images/aboutMe.jpg`} alt='' />
      </Link>
      <header>
        <h2>Dhruvil Gajjar</h2>
        <p>
          <a href='mailto:dgajjar999@gmail.com'>dgajjar999@gmail.com</a>
        </p>
      </header>
    </section>

    <section className='blurb'>
      <h2>About</h2>
      <p>
        Hello! My name is Dhruvil Gajjar, As a passionate Web & Cross platform
        mobile application developer, I always prefer to build things or
        challenging projects. I have been focusing on clean coding and modern,
        elegant mobile app & user-friendly website design.
      </p>
      <ul className='actions'>
        <li>
          {window.location.pathname !== `${BASE_PATH}/resume` ? (
            <Link to='/resume' className='button'>
              Learn More
            </Link>
          ) : (
            <Link to='/about' className='button'>
              About Me
            </Link>
          )}
        </li>
      </ul>
    </section>

    <section id='footer'>
      <ul className='icons'>
        {data.map((s) => (
          <li key={s.label}>
            <a href={s.link}>
              <FontAwesomeIcon icon={s.icon} />
            </a>
          </li>
        ))}
      </ul>
    </section>
  </section>
);

export default Nav;
