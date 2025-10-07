import React, { useState, useEffect } from 'react';
import { Game, GameCategory, GameMetadata, GameInfo } from '../types/Game';
import { api } from '../services/api';
import './GameModal.css';

interface GameModalProps {
  game: Game;
  category: GameCategory;
  onClose: () => void;
}

const GameModal: React.FC<GameModalProps> = ({ game, category, onClose }) => {
  const [gameInfo, setGameInfo] = useState<GameInfo | null>(null);
  const [metadata, setMetadata] = useState<GameMetadata | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGameData = async () => {
      try {
        setLoading(true);
        const [infoResponse, metadataResponse] = await Promise.all([
          api.getGameInfo(category, game.id),
          api.getGameMetadata(category, game.id)
        ]);
        
        setGameInfo(infoResponse);
        setMetadata(metadataResponse);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load game data');
      } finally {
        setLoading(false);
      }
    };

    fetchGameData();
  }, [game.id, category]);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const renderMetadata = () => {
    if (!metadata) return null;

    switch (category) {
      case 'slots':
        return (
          <div className="metadata-section">
            <h4>Live Stats</h4>
            {metadata.currentJackpot && (
              <p><strong>Current Jackpot:</strong> {metadata.currentJackpot}</p>
            )}
            {metadata.playersOnline && (
              <p><strong>Players Online:</strong> {metadata.playersOnline}</p>
            )}
            {metadata.hotStreak && (
              <p className="hot-streak">🔥 Hot Streak Active!</p>
            )}
            {metadata.recentWins && (
              <div>
                <strong>Recent Wins:</strong>
                <ul className="recent-wins">
                  {metadata.recentWins.map((win: any, index: number) => (
                    <li key={index}>{win.amount} - {win.time}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'bingo':
        return (
          <div className="metadata-section">
            <h4>Room Info</h4>
            <p><strong>Next Game:</strong> {new Date(metadata.nextGame).toLocaleTimeString()}</p>
            <p><strong>Current Prize:</strong> {metadata.currentPrize}</p>
            <p><strong>Players Waiting:</strong> {metadata.playersWaiting}/{metadata.roomCapacity}</p>
          </div>
        );

      case 'live-dealer':
        return (
          <div className="metadata-section">
            <h4>Table Status</h4>
            <p><strong>Dealer:</strong> {metadata.dealerName}</p>
            <p><strong>Status:</strong> {metadata.tableStatus}</p>
            <p><strong>Players:</strong> {metadata.playersAtTable}/{metadata.maxPlayers}</p>
            
            {metadata.recentResults && (
              <div>
                <strong>Recent Results:</strong>
                <ul className="recent-results">
                  {metadata.recentResults.slice(0, 5).map((result: any, index: number) => (
                    <li key={index}>
                      {result.number !== undefined ? `${result.number} (${result.color})` : 
                       result.winner ? `${result.winner}` : 
                       result.result}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {metadata.recentHands && (
              <div>
                <strong>Recent Hands:</strong>
                <ul className="recent-results">
                  {metadata.recentHands.slice(0, 3).map((hand: any, index: number) => (
                    <li key={index}>{hand.result}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        );

      case 'poker':
        return (
          <div className="metadata-section">
            <h4>Tournament Info</h4>
            <p><strong>Next Tournament:</strong> {metadata.tournamentName}</p>
            <p><strong>Start Time:</strong> {new Date(metadata.nextTournament).toLocaleTimeString()}</p>
            <p><strong>Buy-in:</strong> {metadata.buyIn}</p>
            <p><strong>Guaranteed Prize:</strong> {metadata.guaranteedPrize}</p>
            <p><strong>Registered:</strong> {metadata.playersRegistered}/{metadata.maxPlayers}</p>
            
            {metadata.cashGames && (
              <div>
                <strong>Cash Games Active:</strong> {metadata.cashGames.active}
                <p><strong>Stakes:</strong> {metadata.cashGames.stakes.join(', ')}</p>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="modal-backdrop" onClick={handleBackdropClick}>
      <div className="modal-content">
        <div className="modal-header">
          <h2>{game.name}</h2>
          <button className="close-button" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          {loading ? (
            <div className="loading">Loading game information...</div>
          ) : error ? (
            <div className="error">Error: {error}</div>
          ) : (
            <>
              <div className="game-image-container">
                <img src={game.image} alt={game.name} className="modal-game-image" />
              </div>

              <div className="game-details">
                <div className="basic-info">
                  <p><strong>Provider:</strong> {game.provider}</p>
                  <p><strong>RTP:</strong> {gameInfo?.details.rtp}</p>
                  <p><strong>Bet Range:</strong> ${gameInfo?.details.minBet} - ${gameInfo?.details.maxBet}</p>
                </div>

                <div className="description">
                  <h4>Description</h4>
                  <p>{gameInfo?.details.description}</p>
                </div>

                {gameInfo?.details.features && gameInfo.details.features.length > 0 && (
                  <div className="features">
                    <h4>Features</h4>
                    <ul>
                      {gameInfo.details.features.map((feature, index) => (
                        <li key={index}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                )}

                {renderMetadata()}
              </div>
            </>
          )}
        </div>

        <div className="modal-footer">
          <button className="play-button" onClick={() => console.log(`Playing ${game.name}`)}>
            Play Now
          </button>
          <button className="demo-button" onClick={() => console.log(`Demo ${game.name}`)}>
            Try Demo
          </button>
        </div>
      </div>
    </div>
  );
};

export default GameModal;
