import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

function Header() {
  const [namePage, setNamePage] = useState('');

  useEffect(() => {
    switch (window.location.pathname) {
      case '/':
        setNamePage('Main');
        break;
      case '/about':
        setNamePage('About Us');
        break;
      case '/form':
        setNamePage('Form');
        break;
    }
  }, []);

  const handleClick = (name: string) => {
    setNamePage(name);
  };

  return (
    <header className="header">
      <nav className="header__navigation">
        <h2 className="current-page">{namePage}</h2>
        <ul className="navigation__list">
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/'} onClick={() => handleClick('Main')}>
              Main
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink
              className="navigation__link"
              to={'/about'}
              onClick={() => handleClick('About us')}
            >
              About us
            </NavLink>
          </li>
          <li className="navigation__item">
            <NavLink className="navigation__link" to={'/form'} onClick={() => handleClick('Form')}>
              Form
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
