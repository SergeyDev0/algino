import React from "react";
import { Squash as Hamburger } from 'hamburger-react';

const HamburgerMenu = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <div className="header__hamburger">
      <Hamburger toggled={isOpen} toggle={setOpen} />
      <ul className="header__hamburger-list">
        <li className="header__hamburger-list__item">
          <a href="/" className="header__hamburger-list__item-link">Главная</a>
        </li>
        <li className="header__hamburger-list__item">
          <a href="/" className="header__hamburger-list__item-link"></a>
        </li>
        <li className="hamburger-list__item">
          <a href="/" className="header__hamburger-list__item-link"></a>
        </li>
        <li className="hamburger-list__item">
          <a href="/" className="header__hamburger-list__item-link"></a>
        </li>
        <li className="hamburger-list__item">
          <a href="/" className="header__hamburger-list__item-link"></a>
        </li>
      </ul>
    </div>
  )
};

export default HamburgerMenu;
