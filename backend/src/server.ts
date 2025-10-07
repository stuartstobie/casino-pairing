import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import gamesData from './data/games';
import gameMetadata from './data/metadata';
import { GameCategory, GamesByCategory, GameMetadataByCategory, GamesResponse, HealthResponse, GameInfo } from './types/Game';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Type guard to check if category is valid
const isValidCategory = (category: string): category is GameCategory => {
  return ['slots', 'bingo', 'live-dealer', 'poker'].includes(category);
};

// Routes

// Get games by category
app.get('/api/games/:category', (req: Request, res: Response) => {
  const { category } = req.params;
  
  if (!isValidCategory(category)) {
    return res.status(404).json({ error: 'Category not found' });
  }
  
  const games = (gamesData as GamesByCategory)[category];
  if (!games) {
    return res.status(404).json({ error: 'Category not found' });
  }
  
  const response: GamesResponse = {
    category,
    games
  };
  
  res.json(response);
});

// Get game metadata
app.get('/api/games/:category/:gameId/metadata', (req: Request, res: Response) => {
  const { category, gameId } = req.params;
  
  if (!isValidCategory(category)) {
    return res.status(404).json({ error: 'Invalid category' });
  }
  
  const categoryMetadata = (gameMetadata as GameMetadataByCategory)[category];
  if (!categoryMetadata || !categoryMetadata[gameId]) {
    return res.status(404).json({ error: 'Game metadata not found' });
  }
  
  res.json(categoryMetadata[gameId]);
});

// Get game info/details
app.get('/api/games/:category/:gameId/info', (req: Request, res: Response) => {
  const { category, gameId } = req.params;
  
  if (!isValidCategory(category)) {
    return res.status(404).json({ error: 'Invalid category' });
  }
  
  const games = (gamesData as GamesByCategory)[category];
  const game = games?.find(g => g.id === gameId);
  
  if (!game) {
    return res.status(404).json({ error: 'Game not found' });
  }
  
  const gameInfo: GameInfo = {
    ...game,
    details: {
      description: game.description,
      rtp: game.rtp,
      minBet: game.minBet,
      maxBet: game.maxBet,
      features: game.features || []
    }
  };
  
  res.json(gameInfo);
});

// Health check
app.get('/api/health', (req: Request, res: Response) => {
  const response: HealthResponse = {
    status: 'OK',
    timestamp: new Date().toISOString()
  };
  res.json(response);
});

// Error handling middleware
app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
  console.error(err.stack);
  res.status(500).json({ error: 'Something went wrong!' });
});

// 404 handler
app.use('*', (req: Request, res: Response) => {
  res.status(404).json({ error: 'Route not found' });
});

app.listen(PORT, () => {
  console.log(`🎰 Casino API server running on port ${PORT}`);
  console.log(`📍 Health check: http://localhost:${PORT}/api/health`);
});

export default app;
