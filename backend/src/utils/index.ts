import { GameCategory } from "../types/Game";

// Type guard to check if category is valid
export const isValidCategory = (category: string): category is GameCategory => {
    return ['slots', 'bingo', 'live-dealer', 'poker'].includes(category);
  };    