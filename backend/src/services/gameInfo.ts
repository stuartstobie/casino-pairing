import { Request, Response } from "express";
import { GameInfoByCategory } from "../types/Game";
import gamesInfo from "../data/gameInfo";
import { isValidCategory } from "../utils";

export const getGameInfo = (req: Request, res: Response) => {
    const { category, gameId } = req.params;

    if (!isValidCategory(category!)) {
        return res.status(404).json({ error: 'Category not found' });
    }

    const games = (gamesInfo as GameInfoByCategory)[category];

    const gameDetails = games.find((game) => game.id === gameId );
    if (!gameDetails) {
        return res.status(404).json({ error: 'Game not found' });
    }

    return res.status(200).json({ details: gameDetails });

    // TODO: Implement this
    // const gameInfo: GameInfo
    
    // return res.json(gameInfo);
}