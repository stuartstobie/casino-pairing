export interface Game {
  id: string;
  name: string;
  image: string;
  provider: string;
  rtp: string;
  minBet: number;
  maxBet: number;
}

export interface GameMetadata {
  [key: string]: any;
}

export interface GameInfo {
  details: {
    description: string;
    rtp: string;
    minBet: number;
    maxBet: number;
    features: string[];
  };
}

export type GameCategory = 'slots' | 'bingo' | 'live-dealer' | 'poker';
