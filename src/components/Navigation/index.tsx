import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';

export const Navigation: FC = () => (
  <nav className="nav">
    <ul className="nav--wrapper">
      <li>
        <NavLink
          to="/"
          exact
          className="nav--link"
          activeClassName="nav--link__active"
        >
          Colors
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/gradients"
          exact
          className="nav--link"
          activeClassName="nav--link__active"
        >
          Gradients
        </NavLink>
      </li>
    </ul>
  </nav>
);
