import React from "react";
import { Squash as Hamburger } from 'hamburger-react';
import Logo from "../../../assets/icons/logo.svg";
import "./header.scss";

const Header = () => {
  const [isOpen, setOpen] = React.useState(false)
  return (
    <>
      <div className="header__logo">
      <div className="header__hamburger">
        <Hamburger toggled={isOpen} toggle={setOpen} />
      </div>
        <img className="header__logo-icon" src={Logo} alt="logo" />
      </div>
      <header className="header">
        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-list__item">
              <a href="" className="header__nav-list__item-link">Главная</a>
            </li>
            <li className="header__nav-list__item">
              <a href="" className="header__nav-list__item-link">Почему мы?</a>
            </li>
            <li className="header__nav-list__item">
              <a href="" className="header__nav-list__item-link">Контакты</a>
            </li>
            <li className="header__nav-list__item">
              <a href="" className="header__nav-list__item-link">Отзывы</a>
            </li>
            <li className="header__nav-list__item">
              <a href="" className="header__nav-list__item-link">О нас</a>
            </li>
          </ul>
        </nav>
        <ul className={isOpen ? "header__hamburger-list show" : "header__hamburger-list"}>
          <li className="header__hamburger-list__item">
            <a href="/" className="header__hamburger-list__item-link">Главная</a>
          </li>
          <li className="header__hamburger-list__item">
            <a href="/" className="header__hamburger-list__item-link">Почему мы?</a>
          </li>
          <li className="hamburger-list__item">
            <a href="/" className="header__hamburger-list__item-link">Контакты</a>
          </li>
          <li className="hamburger-list__item">
            <a href="/" className="header__hamburger-list__item-link">Отзывы</a>
          </li>
          <li className="hamburger-list__item">
            <a href="/" className="header__hamburger-list__item-link">О нас</a>
          </li>
        </ul>
      </header>
    </>
  )
};

export default Header;
