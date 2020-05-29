import React, { FC } from 'react';
import { Link } from 'react-router-dom';

export const Logo: FC = () => (
  <Link className="logo" to="/">
    <div className="logo--square" />
    <span className="logo--text">
      ColorXoms
    </span>
  </Link>
);
