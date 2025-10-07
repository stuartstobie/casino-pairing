import { GameInfoByCategory } from '../types/Game';

const games: GameInfoByCategory = {
  slots: [
    {
      id: 'mega-fortune',
      rtp: '96.6%',
      minBet: 0.25,
      maxBet: 50,
      description: 'A luxurious progressive jackpot slot with champagne, yachts, and diamond rings.',
      features: ['Progressive Jackpot', 'Free Spins', 'Wild Symbols']
    },
    {
      id: 'starburst',
      rtp: '96.1%',
      minBet: 0.10,
      maxBet: 100,
      description: 'A vibrant space-themed slot with expanding wilds and re-spins.',
      features: ['Expanding Wilds', 'Re-spins', 'Both Ways Pay']
    },
    {
      id: 'gonzo-quest',
      rtp: '95.97%',
      minBet: 0.20,
      maxBet: 50,
      description: 'Join Gonzo on his quest for gold with avalanche reels and multipliers.',
      features: ['Avalanche Reels', 'Free Falls', 'Multipliers']
    },
    {
      id: 'book-of-dead',
      rtp: '94.25%',
      minBet: 0.01,
      maxBet: 100,
      description: 'An Egyptian adventure with Rich Wilde and expanding symbols.',
      features: ['Free Spins', 'Expanding Symbols', 'Gamble Feature']
    }
  ],
  
  bingo: [
    {
      id: 'lucky-numbers',
      rtp: '95.0%',
      minBet: 0.10,
      maxBet: 5,
      description: 'Classic 90-ball bingo with exciting side games and chat features.',
      features: ['90-Ball Bingo', 'Side Games', 'Chat Room']
    },
    {
      id: 'rainbow-riches-bingo',
      rtp: '94.5%',
      minBet: 0.05,
      maxBet: 2,
      description: 'Irish-themed bingo with leprechauns and pots of gold.',
      features: ['75-Ball Bingo', 'Bonus Games', 'Progressive Jackpots']
    },
    {
      id: 'speed-bingo',
      rtp: '96.2%',
      minBet: 0.25,
      maxBet: 10,
      description: 'Fast-paced 30-ball bingo for quick thrills and instant wins.',
      features: ['30-Ball Bingo', 'Quick Games', 'Auto-Daub']
    }
  ],
  
  'live-dealer': [
    {
      id: 'live-blackjack',
      rtp: '99.28%',
      minBet: 1,
      maxBet: 5000,
      description: 'Classic blackjack with professional dealers streamed in HD.',
      features: ['HD Streaming', 'Side Bets', 'Multi-hand']
    },
    {
      id: 'live-roulette',
      rtp: '97.30%',
      minBet: 0.50,
      maxBet: 10000,
      description: 'European roulette with immersive camera angles and statistics.',
      features: ['European Wheel', 'Statistics', 'Hot/Cold Numbers']
    },
    {
      id: 'live-baccarat',
      rtp: '98.94%',
      minBet: 5,
      maxBet: 10000,
      description: 'Elegant baccarat with squeeze feature and roadmaps.',
      features: ['Squeeze Feature', 'Roadmaps', 'Side Bets']
    },
    {
      id: 'live-poker',
      rtp: '97.84%',
      minBet: 1,
      maxBet: 1000,
      description: 'Texas Hold\'em poker against the house with progressive jackpot.',
      features: ['Progressive Jackpot', 'AA Bonus', 'Live Chat']
    }
  ],
  
  poker: [
    {
      id: 'texas-holdem',
      rtp: 'N/A',
      minBet: 0.01,
      maxBet: 1000,
      description: 'The world\'s most popular poker variant with tournaments and cash games.',
      features: ['Tournaments', 'Cash Games', 'Sit & Go']
    },
    {
      id: 'omaha',
      rtp: 'N/A',
      minBet: 0.02,
      maxBet: 500,
      description: 'Four-card poker variant with more action and bigger pots.',
      features: ['PLO', 'Fixed Limit', 'Multi-table']
    },
    {
      id: 'seven-card-stud',
      rtp: 'N/A',
      minBet: 0.05,
      maxBet: 200,
      description: 'Classic poker variant with no community cards and strategic play.',
      features: ['Fixed Limit', 'Ante Games', 'Hi-Lo Split']
    }
  ]
};

export default games;
