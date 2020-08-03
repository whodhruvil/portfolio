import React from "react";
import { Link } from "react-router-dom";
import { Helmet } from "react-helmet";

import Main from "../layouts/Main";

function Recomendation() {
  return (
    <Main>
      <Helmet title='Recommendations' />
      <article className='post' id='recommendation'>
        <header>
          <div className='title'>
            <h2>
              <Link to='/recommendations'>RECOMMENDATIONS</Link>
            </h2>
            <p>
              You'll find different resources that I've used and recommendation
            </p>
          </div>
        </header>

        <div>
          <h3>HTML/CSS</h3>
          <li className='list'>
            <a href='' target='_blank' rel='noopener noreferrer'>
              Build Responsive Real World Websites with HTML5 and CSS3
            </a>
            <span style={{ marginRight: 10, marginLeft: 10 }}>by</span>
            <a href='' target='_blank' rel='noopener noreferrer'>
              Jonas
            </a>
          </li>
        </div>
      </article>
    </Main>
  );
}

export default Recomendation;
