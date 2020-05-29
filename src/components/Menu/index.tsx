import React, { FC, useState } from 'react';
import { Link } from 'react-router-dom';

export const Menu: FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const handlerClick = () => {
    setIsOpen((prev) => !prev);
  };
  const handlerThemeClick = () => {
    setIsOpen((prev) => !prev);
  };
  const image = isOpen ? '/svg/close.svg' : '/svg/menu.svg';
  return (
    <div className={`menu ${isOpen ? 'menu__open' : ''}`}>
      <img
        src={image}
        alt="menu"
        className="menu--icon"
        onClick={handlerClick}
      />
      <div className="menu--content">
        <span className="menu--separator" />
        <div className="menu--element-wrapper">
          <img
            src="/svg/theme-light.svg"
            alt="menu"
            onClick={handlerThemeClick}
          />
        </div>
        <div className="menu--element-wrapper">
          <img
            src="/svg/info.svg"
            alt="menu"
            onClick={handlerThemeClick}
          />
        </div>
        <div className="menu--element-wrapper">
          <div className="menu--button">
            <div className="logo--square" />
            <span className="logo--text">
              FontXoms
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
