import { Request, Response } from "express";
import { GamesByCategory, GamesResponse } from "../types/Game";
import gamesData from "../data/games";
import { isValidCategory } from "../utils";

export const getGamesByCategory = (req: Request, res: Response) => {
    const { category } = req.params;
  
    if (!isValidCategory(category!)) {
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
    
    return res.json(response);
};