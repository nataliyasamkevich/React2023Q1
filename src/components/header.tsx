import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  return (
    <header className="header">
      <nav className="header__navigation">
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/'}>
              Main
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/about'}>
              About us
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
