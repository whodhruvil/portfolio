import React from "react";
import { Link, useLocation } from "react-router-dom";

import Hamburger from "./Hamburger";
import routes from "../../data/routes";

const Header = () => {
  const location = useLocation();

  return (
    <header id='header'>
      <h1 className='index-link'>
        {routes
          .filter((l) => l.index)
          .map((l) => (
            <Link key={l.label} to={l.path} className=''>
              {l.label}
            </Link>
          ))}
      </h1>
      <nav className='links'>
        <ul>
          {routes
            .filter((l) => !l.index)
            .map((l) => (
              <li key={l.label}>
                <Link
                  to={l.path}
                  className={location.pathname === l.path ? "active" : ""}
                >
                  {l.label}
                </Link>
              </li>
            ))}
        </ul>
      </nav>
      <Hamburger />
    </header>
  );
};

export default Header;
