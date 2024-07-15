import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">ALURAFLIX</div>
      <nav>
        <Link to="/" className="home-btn">HOME</Link>
        <Link to="/new-video" className="new-video-btn">NUEVO VIDEO</Link>
      </nav>
    </header>
  );
};

export default Header;
