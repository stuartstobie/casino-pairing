import { Request, Response } from "express";
import gameInfoData from "../data/gameInfo";
import { GameInfo } from "../types/Game";
import { isValidCategory } from "../utils";

export const getGameInfo = (req: Request, res: Response) => {
    const { category, gameId } = req.params;
  
    if (!isValidCategory(category!)) {
      return res.status(404).json({ error: 'Invalid category' });
    }
    
    const games = gameInfoData[category];
    const game = games?.find(g => g.id === gameId);
    
    if (!game) {
      return res.status(404).json({ error: 'Game not found' });
    }
    
    const gameInfo: GameInfo = {
      details: {
        description: game.description,
        rtp: game.rtp,
        minBet: game.minBet,
        maxBet: game.maxBet,
        features: game.features || []
      }
    };
    
    return res.json(gameInfo);
}