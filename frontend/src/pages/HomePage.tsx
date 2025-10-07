import React from 'react';
import { Link } from 'react-router-dom';
import './HomePage.css';

const HomePage: React.FC = () => {
  const categories = [
    {
      path: '/slots',
      title: 'Slots',
      icon: '🎰',
      description: 'Spin the reels on hundreds of exciting slot games',
      color: '#FF6B6B'
    },
    {
      path: '/bingo',
      title: 'Bingo',
      icon: '🎱',
      description: 'Join the fun in our vibrant bingo rooms',
      color: '#4ECDC4'
    },
    {
      path: '/live-dealer',
      title: 'Live Dealer',
      icon: '🎲',
      description: 'Experience real casino action with live dealers',
      color: '#45B7D1'
    },
    {
      path: '/poker',
      title: 'Poker',
      icon: '🃏',
      description: 'Test your skills in tournaments and cash games',
      color: '#96CEB4'
    }
  ];

  return (
    <div className="home-page">
      <div className="hero-section">
        <h1 className="hero-title">Welcome to Casino Lobby</h1>
        <p className="hero-subtitle">
          Your gateway to the most exciting casino games online
        </p>
      </div>

      <div className="categories-grid">
        {categories.map((category) => (
          <Link
            key={category.path}
            to={category.path}
            className="category-card"
            style={{ '--card-color': category.color } as React.CSSProperties}
          >
            <div className="category-icon">{category.icon}</div>
            <h2 className="category-title">{category.title}</h2>
            <p className="category-description">{category.description}</p>
            <div className="category-arrow">→</div>
          </Link>
        ))}
      </div>

      <div className="features-section">
        <h2>Why Choose Our Casino?</h2>
        <div className="features-grid">
          <div className="feature">
            <div className="feature-icon">🔒</div>
            <h3>Secure & Fair</h3>
            <p>Licensed and regulated with provably fair games</p>
          </div>
          <div className="feature">
            <div className="feature-icon">💰</div>
            <h3>Big Jackpots</h3>
            <p>Progressive jackpots worth millions of dollars</p>
          </div>
          <div className="feature">
            <div className="feature-icon">⚡</div>
            <h3>Instant Play</h3>
            <p>No downloads required - play directly in your browser</p>
          </div>
          <div className="feature">
            <div className="feature-icon">🎁</div>
            <h3>Bonuses</h3>
            <p>Generous welcome bonuses and daily promotions</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
