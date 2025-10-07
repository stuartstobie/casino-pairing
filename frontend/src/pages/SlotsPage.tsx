import React, { useState, useEffect } from 'react';
import { Game } from '../types/Game';
import { api } from '../services/api';
import GameTile from '../components/GameTile';
import './GamePage.css';

const SlotsPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await api.getGames('slots');
        setGames(response.games);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load games');
      } finally {
        setLoading(false);
      }
    };

    fetchGames();
  }, []);

  if (loading) {
    return (
      <div className="game-page">
        <div className="loading">Loading slots games...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="game-page">
        <div className="error">Error: {error}</div>
      </div>
    );
  }

  return (
    <div className="game-page">
      <div className="page-header">
        <h1 className="page-title">
          <span className="page-icon">🎰</span>
          Slots Games
        </h1>
        <p className="page-description">
          Spin the reels and win big with our exciting collection of slot games
        </p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameTile key={game.id} game={game} category="slots" />
        ))}
      </div>
    </div>
  );
};

export default SlotsPage;
