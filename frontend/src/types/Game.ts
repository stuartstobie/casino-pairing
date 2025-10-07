export interface Game {
  id: string;
  name: string;
  image: string;
  provider: string;
  rtp: string;
  minBet: number;
  maxBet: number;
  description: string;
  features: string[];
}

export interface GameMetadata {
  [key: string]: any;
}

export interface GameInfo extends Game {
  details: {
    description: string;
    rtp: string;
    minBet: number;
    maxBet: number;
    features: string[];
  };
}

export type GameCategory = 'slots' | 'bingo' | 'live-dealer' | 'poker';
