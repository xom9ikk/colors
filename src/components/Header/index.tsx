import React, { FC, useState } from 'react';
import { Logo } from '../Logo';
import { Navigation } from '../Navigation';
import { Menu } from '../Menu';

export const Header: FC = () => {
  const [isMenuOpened, setIsMenuOpened] = useState(false);

  const handlerClick = () => {
    setIsMenuOpened((prev) => !prev);
  };

  return (
    <header className="header">
      <Logo isMenuOpened={isMenuOpened} />
      <Navigation />
      <Menu
        onClick={handlerClick}
        isOpen={isMenuOpened}
      />
    </header>
  );
};
