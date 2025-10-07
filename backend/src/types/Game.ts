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

export interface GamesByCategory {
  slots: Game[];
  bingo: Game[];
  'live-dealer': Game[];
  poker: Game[];
}

export type GameCategory = keyof GamesByCategory;

// Metadata interfaces for different game types
export interface SlotMetadata {
  currentJackpot?: string;
  recentWins?: Array<{
    amount: string;
    time: string;
  }>;
  playersOnline?: number;
  hotStreak?: boolean;
  bonusRound?: string;
  freeSpinsActive?: boolean;
}

export interface BingoMetadata {
  nextGame: string;
  currentPrize: string;
  playersWaiting: number;
  roomCapacity: number;
}

export interface LiveDealerMetadata {
  dealerName: string;
  tableStatus: string;
  playersAtTable: number;
  maxPlayers: number;
  recentResults?: Array<{
    number?: number;
    color?: string;
    winner?: string;
    result?: string;
    cards?: string[];
    dealerCards?: string[];
    bankerCards?: string[];
    playerCards?: string[];
  }>;
  recentHands?: Array<{
    result: string;
    cards?: string[];
    dealerCards?: string[];
    hand?: string;
    payout?: string;
  }>;
  hotNumbers?: number[];
  coldNumbers?: number[];
  currentJackpot?: string;
}

export interface PokerMetadata {
  nextTournament: string;
  tournamentName: string;
  buyIn: string;
  guaranteedPrize: string;
  playersRegistered: number;
  maxPlayers: number;
  cashGames: {
    active: number;
    stakes: string[];
  };
}

export interface GameMetadataByCategory {
  slots: Record<string, SlotMetadata>;
  bingo: Record<string, BingoMetadata>;
  'live-dealer': Record<string, LiveDealerMetadata>;
  poker: Record<string, PokerMetadata>;
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

export interface ApiResponse<T> {
  data?: T;
  error?: string;
  message?: string;
}

export interface GamesResponse {
  category: string;
  games: Game[];
}

export interface HealthResponse {
  status: string;
  timestamp: string;
}
