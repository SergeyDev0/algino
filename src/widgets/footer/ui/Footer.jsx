import React from "react";
import Logo from "../../../assets/icons/logo-w.svg"
import "./footer.scss"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-wrapper">
        <div className="footer__logo">
          <img className="footer__logo-icon" src={Logo} />
        </div>
        <p className="footer__copyright">©️ 2024 Алгино | Все права защищены</p>
      </div>
    </footer>
  )
};

export default Footer;
