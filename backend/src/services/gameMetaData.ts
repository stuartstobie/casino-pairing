import { Request, Response } from "express";
import { GameMetadataByCategory } from "../types/Game";
import { isValidCategory } from "../utils";
import gameMetadata from "../data/metadata";

export const getGameMetaData = (req: Request, res: Response) => {
    const { category, gameId } = req.params;
  
    if (!isValidCategory(category!)) {
    return res.status(404).json({ error: 'Invalid category' });
    }

    const categoryMetadata = (gameMetadata as GameMetadataByCategory)[category];
    if (!categoryMetadata || !categoryMetadata[gameId!]) {
    return res.status(404).json({ error: 'Game metadata not found' });
    }

    return res.json(categoryMetadata[gameId!]);
}