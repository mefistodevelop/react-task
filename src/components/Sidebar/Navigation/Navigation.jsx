import React from 'react';
import './Navigation.scss';
import { Link } from 'react-router-dom';

export function Navigation() {
  return (
    <nav className="navigation">
      <ul className="navigation__list">
        <li className="navigation__item">
          <Link className="navigation__link" to="/terminals">
            Terminals
          </Link>
        </li>
        <li className="navigation__item">
          <Link className="navigation__link" to="/buyers">
            Buyers
          </Link>
        </li>
      </ul>
    </nav>
  );
}
