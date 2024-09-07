import { useState } from 'react';
import AuthUser from './forms/AuthUser';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAuthUserOpen, setIsAuthUserOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleAuthUser = () => {
    setIsAuthUserOpen(!isAuthUserOpen);
  };

  return (
    <div className="site-header">
      <div className="header-left">
        <div className="logo">
          <a href="/">JobLink</a>
        </div>
      </div>
      <div className="nav-menu">
        <div className="toggleBar" onClick={toggleMenu}>
          <div></div>
          <div></div>
          <div></div>
        </div>
        <ul className={isMenuOpen ? 'open' : ''}>
          <li><a href="/"><i><img src='/icons/home.png' className='home-icon' alt='Home Icon'/></i></a></li>
          <li><a href="#" className="loginBtn" onClick={toggleAuthUser}>Login</a></li>
          <li><a href="/employers" className="employer-link">Post Job</a></li>
        </ul>
      </div>

      {/* Conditionally render AuthUser form */}
      {isAuthUserOpen && (
        <div className="auth-popup">
          <div className="auth-popup-content">
            <button className="close-btn" onClick={toggleAuthUser}>X</button>
            <AuthUser />
          </div>
        </div>
      )}
    </div>
  );
};

export default Header;
