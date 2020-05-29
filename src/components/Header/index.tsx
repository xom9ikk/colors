import React, { FC } from 'react';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { Menu } from '../Menu';

export const Header: FC = () => (
  <header className="header">
    <Logo />
    <Navigation />
    <Menu />
  </header>
);
