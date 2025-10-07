import React, { useState } from 'react';
import { Game, GameCategory } from '../types/Game';
import GameModal from './GameModal';
import './GameTile.css';

interface GameTileProps {
  game: Game;
  category: GameCategory;
}

const GameTile: React.FC<GameTileProps> = ({ game, category }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleInfoClick = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setIsModalOpen(true);
  };

  const handleTileClick = () => {
    // In a real application, this would launch the game
    console.log(`Launching game: ${game.name}`);
  };

  return (
    <>
      <div className="game-tile" onClick={handleTileClick}>
        <div className="game-tile-image-container">
          <img 
            src={game.image} 
            alt={game.name}
            className="game-tile-image"
            loading="lazy"
          />
          <button 
            className="info-button"
            onClick={handleInfoClick}
            aria-label={`Get info about ${game.name}`}
          >
            ℹ️
          </button>
        </div>
        
        <div className="game-tile-content">
          <h3 className="game-title">{game.name}</h3>
          <p className="game-provider">{game.provider}</p>
          <div className="game-stats">
            <span className="game-rtp">RTP: {game.rtp}</span>
            <span className="game-bet-range">
              ${game.minBet} - ${game.maxBet}
            </span>
          </div>
        </div>
      </div>

      {isModalOpen && (
        <GameModal
          game={game}
          category={category}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default GameTile;
