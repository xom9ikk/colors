import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => (
  <nav className="nav">
    <ul className="nav__wrapper">
      <li>
        <NavLink
          to="/"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Colors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gradients"
          exact
          className="nav__link"
          activeClassName="nav__link--active"
        >
          Gradients
        </NavLink>
      </li>
    </ul>
  </nav>
);
