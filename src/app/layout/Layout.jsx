import Header from './../../widgets/header/ui/Header';
import Footer from "../../widgets/footer/ui/Footer";
import "./layout.scss"
import HamburgerMenu from './../../widgets/hamburgerMenu/HamburgerMenu';

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="main">
        {children}
      </main>
      <Footer />
    </>
  )
};

export default Layout;
