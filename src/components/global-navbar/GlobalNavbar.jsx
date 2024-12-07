import logo from 'assets/logos/EZstay_logo.png'; // Updated logo path
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import HamburgerMenu from 'components/hamburger-menu/HamburgerMenu';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from 'contexts/AuthContext';
import NavbarItems from 'components/navbar-items/NavbarItems';

const GlobalNavbar = () => {
  const [isVisible, setIsVisible] = useState(false);
  const { isAuthenticated } = useContext(AuthContext);

  // Toggle the visibility of the hamburger menu
  const onHamburgerMenuToggle = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="relative flex flex-wrap justify-between items-center px-4 md:px-12 global-navbar__container bg-brand brand-divider-bottom shadow-md">
      <div className="flex">
        <Link to="/">
          <img src={logo} alt="EZstay logo" className="site-logo__img" />
        </Link>
      </div>

      {/* Desktop Navbar Items */}
      <ul className="list-none hidden md:flex">
        <NavbarItems isAuthenticated={isAuthenticated} />
      </ul>

      {/* Hamburger Icon (Mobile) */}
      <FontAwesomeIcon
        data-testid="menu-toggle__button"
        icon={faBars}
        size="2x"
        color="#fff"
        className="block md:hidden"
        onClick={onHamburgerMenuToggle}
        aria-label={isVisible ? 'Close menu' : 'Open menu'} // Improved accessibility
      />

      {/* Hamburger Menu (Mobile) */}
      <HamburgerMenu
        isVisible={isVisible}
        onHamburgerMenuToggle={onHamburgerMenuToggle}
        isAuthenticated={isAuthenticated}
      />
    </div>
  );
};

export default GlobalNavbar;
