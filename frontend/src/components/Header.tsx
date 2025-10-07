import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Header.css';

const Header: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home', icon: '🏠' },
    { path: '/slots', label: 'Slots', icon: '🎰' },
    { path: '/bingo', label: 'Bingo', icon: '🎱' },
    { path: '/live-dealer', label: 'Live Dealer', icon: '🎲' },
    { path: '/poker', label: 'Poker', icon: '🃏' },
  ];

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <span className="logo-icon">🎰</span>
          <span className="logo-text">Casino Lobby</span>
        </Link>
        
        <nav className="nav">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={`nav-item ${location.pathname === item.path ? 'active' : ''}`}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-label">{item.label}</span>
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
};

export default Header;
