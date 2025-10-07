import { Request, Response } from "express";
import gameInfoData from "../data/gameInfo";
import { GameInfo } from "../types/Game";
import { isValidCategory } from "../utils";

export const getGameInfo = (req: Request, res: Response) => {
    return res.status(404).json({ error: 'Game not found' });
    
    // TODO: Implement this
    // const gameInfo: GameInfo = {} as GameInfo;
    
    // return res.json(gameInfo);
}