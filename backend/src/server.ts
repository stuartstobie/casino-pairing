import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import helmet from 'helmet';
import { HealthResponse } from './types/Game';
import { getGamesByCategory } from './services/games';
import { getGameMetaData } from './services/gameMetaData';
import { getGameInfo } from './services/gameInfo';

const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(helmet());
app.use(cors());
app.use(express.json());

// Routes

// Get games by category
app.get('/api/games/:category', (req: Request, res: Response) => {
  return getGamesByCategory(req, res);
});

// Get game metadata
app.get('/api/games/:category/:gameId/metadata', (req: Request, res: Response) => {
  return getGameMetaData(req, res);
});

// Get game info/details
app.get('/api/games/:category/:gameId/info', (req: Request, res: Response) => {
  return getGameInfo(req, res);
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
