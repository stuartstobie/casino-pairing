import React, { useState, useEffect } from 'react';
import { Game } from '../types/Game';
import { api } from '../services/api';
import GameTile from '../components/GameTile';
import './GamePage.css';

const LiveDealerPage: React.FC = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGames = async () => {
      try {
        setLoading(true);
        const response = await api.getGames('live-dealer');
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
        <div className="loading">Loading live dealer games...</div>
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
          <span className="page-icon">🎲</span>
          Live Dealer Games
        </h1>
        <p className="page-description">
          Experience authentic casino action with professional live dealers
        </p>
      </div>

      <div className="games-grid">
        {games.map((game) => (
          <GameTile key={game.id} game={game} category="live-dealer" />
        ))}
      </div>
    </div>
  );
};

export default LiveDealerPage;
