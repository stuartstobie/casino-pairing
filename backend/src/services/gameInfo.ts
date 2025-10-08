import { Request, Response } from "express";

export const getGameInfo = (req: Request, res: Response) => {
    return res.status(404).json({ error: 'Game not found' });

    // TODO: Implement this
    // const gameInfo: GameInfo
    
    // return res.json(gameInfo);
}