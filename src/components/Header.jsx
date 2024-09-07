import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
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
          <li><a href="/Home"><i><img src='/icons/home.png' className='home-icon' alt=''/></i></a></li>
          <li><a href="/upload-resume"><i><img src='/icons/upload.png' className='upload-icon' alt=''/></i></a></li>
          <li><a href="/sign-in" className="loginBtn">Login</a></li>
          <li><a href="/employers" className="employer-link">Post Job</a></li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
