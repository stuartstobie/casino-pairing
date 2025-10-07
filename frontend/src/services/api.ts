import { Game, GameMetadata, GameInfo, GameCategory } from '../types/Game';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:3001/api';

export const api = {
  // Get games by category
  async getGames(category: GameCategory): Promise<{ category: string; games: Game[] }> {
    const response = await fetch(`${API_BASE_URL}/games/${category}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch games for category: ${category}`);
    }
    return response.json();
  },

  // Get game metadata
  async getGameMetadata(category: GameCategory, gameId: string): Promise<GameMetadata> {
    const response = await fetch(`${API_BASE_URL}/games/${category}/${gameId}/metadata`);
    if (!response.ok) {
      throw new Error(`Failed to fetch metadata for game: ${gameId}`);
    }
    return response.json();
  },

  // Get game info/details
  async getGameInfo(category: GameCategory, gameId: string): Promise<GameInfo> {
    const response = await fetch(`${API_BASE_URL}/games/${category}/${gameId}/info`);
    if (!response.ok) {
      throw new Error(`Failed to fetch info for game: ${gameId}`);
    }
    return response.json();
  },

  // Health check
  async healthCheck(): Promise<{ status: string; timestamp: string }> {
    const response = await fetch(`${API_BASE_URL}/health`);
    if (!response.ok) {
      throw new Error('Health check failed');
    }
    return response.json();
  }
};
