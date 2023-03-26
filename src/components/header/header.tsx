import React from 'react';
import { NavLink } from 'react-router-dom';
import './header.css';

interface IHeaderState {
  namePage: string;
}
export class Header extends React.Component<Record<string, never>, IHeaderState> {
  constructor(props: Record<string, never>) {
    super(props);

    let name = '';
    switch (window.location.pathname) {
      case '/':
        name = 'Main';
        break;
      case '/about':
        name = 'About Us';
        break;
      case '/form':
        name = 'Form';
        break;
    }

    this.state = {
      namePage: name,
    };
  }

  handleClick(name: string) {
    this.setState({ namePage: name });
  }

  render() {
    return (
      <header className="header">
        <nav className="header__navigation">
          <h2 className="current-page">{this.state.namePage}</h2>
          <ul className="navigation__list">
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={'/'}
                onClick={() => this.handleClick('Main')}
              >
                Main
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={'/about'}
                onClick={() => this.handleClick('About us')}
              >
                About us
              </NavLink>
            </li>
            <li className="navigation__item">
              <NavLink
                className="navigation__link"
                to={'/form'}
                onClick={() => this.handleClick('Form')}
              >
                Form
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Header;
