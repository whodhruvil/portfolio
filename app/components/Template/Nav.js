import React from "react";
import { Link } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import data from "../../data/contact";

const Nav = () => (
  <section id='sidebar' className='nav_sidebar'>
    <section id='intro'>
      <Link to='/' className='logo'>
        <img src={`${BASE_PATH}/images/aboutMe.png`} alt='' />
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
        Hi, I&apos;m Dhruvil. I like build things. I am a{" "}
        <a href='https://www.gmit.edu.in/'>GMIT</a> graduate, and the co-founder
        of <a href='https://aoroxa.com/'>Aoroxa</a>. Before Aoroxa I was at{" "}
        <a href='https://www.codraintechnolabs.com/'>Codrain Technolab.</a>,{" "}
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
