const games = {
  slots: [
    {
      id: 'mega-fortune',
      name: 'Mega Fortune',
      image: 'https://via.placeholder.com/300x200/FF6B6B/FFFFFF?text=Mega+Fortune',
      provider: 'NetEnt',
      rtp: '96.6%',
      minBet: 0.25,
      maxBet: 50,
      description: 'A luxurious progressive jackpot slot with champagne, yachts, and diamond rings.',
      features: ['Progressive Jackpot', 'Free Spins', 'Wild Symbols']
    },
    {
      id: 'starburst',
      name: 'Starburst',
      image: 'https://via.placeholder.com/300x200/4ECDC4/FFFFFF?text=Starburst',
      provider: 'NetEnt',
      rtp: '96.1%',
      minBet: 0.10,
      maxBet: 100,
      description: 'A vibrant space-themed slot with expanding wilds and re-spins.',
      features: ['Expanding Wilds', 'Re-spins', 'Both Ways Pay']
    },
    {
      id: 'gonzo-quest',
      name: "Gonzo's Quest",
      image: 'https://via.placeholder.com/300x200/45B7D1/FFFFFF?text=Gonzo%27s+Quest',
      provider: 'NetEnt',
      rtp: '95.97%',
      minBet: 0.20,
      maxBet: 50,
      description: 'Join Gonzo on his quest for gold with avalanche reels and multipliers.',
      features: ['Avalanche Reels', 'Free Falls', 'Multipliers']
    },
    {
      id: 'book-of-dead',
      name: 'Book of Dead',
      image: 'https://via.placeholder.com/300x200/F7DC6F/000000?text=Book+of+Dead',
      provider: 'Play\'n GO',
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
      name: 'Lucky Numbers Bingo',
      image: 'https://via.placeholder.com/300x200/E74C3C/FFFFFF?text=Lucky+Numbers',
      provider: 'Bingo Games Ltd',
      rtp: '95.0%',
      minBet: 0.10,
      maxBet: 5,
      description: 'Classic 90-ball bingo with exciting side games and chat features.',
      features: ['90-Ball Bingo', 'Side Games', 'Chat Room']
    },
    {
      id: 'rainbow-riches-bingo',
      name: 'Rainbow Riches Bingo',
      image: 'https://via.placeholder.com/300x200/27AE60/FFFFFF?text=Rainbow+Riches',
      provider: 'Scientific Games',
      rtp: '94.5%',
      minBet: 0.05,
      maxBet: 2,
      description: 'Irish-themed bingo with leprechauns and pots of gold.',
      features: ['75-Ball Bingo', 'Bonus Games', 'Progressive Jackpots']
    },
    {
      id: 'speed-bingo',
      name: 'Speed Bingo',
      image: 'https://via.placeholder.com/300x200/9B59B6/FFFFFF?text=Speed+Bingo',
      provider: 'FastPlay Gaming',
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
      name: 'Live Blackjack',
      image: 'https://via.placeholder.com/300x200/2C3E50/FFFFFF?text=Live+Blackjack',
      provider: 'Evolution Gaming',
      rtp: '99.28%',
      minBet: 1,
      maxBet: 5000,
      description: 'Classic blackjack with professional dealers streamed in HD.',
      features: ['HD Streaming', 'Side Bets', 'Multi-hand']
    },
    {
      id: 'live-roulette',
      name: 'Live Roulette',
      image: 'https://via.placeholder.com/300x200/C0392B/FFFFFF?text=Live+Roulette',
      provider: 'Evolution Gaming',
      rtp: '97.30%',
      minBet: 0.50,
      maxBet: 10000,
      description: 'European roulette with immersive camera angles and statistics.',
      features: ['European Wheel', 'Statistics', 'Hot/Cold Numbers']
    },
    {
      id: 'live-baccarat',
      name: 'Live Baccarat',
      image: 'https://via.placeholder.com/300x200/8E44AD/FFFFFF?text=Live+Baccarat',
      provider: 'Playtech',
      rtp: '98.94%',
      minBet: 5,
      maxBet: 10000,
      description: 'Elegant baccarat with squeeze feature and roadmaps.',
      features: ['Squeeze Feature', 'Roadmaps', 'Side Bets']
    },
    {
      id: 'live-poker',
      name: 'Live Casino Hold\'em',
      image: 'https://via.placeholder.com/300x200/16A085/FFFFFF?text=Live+Poker',
      provider: 'Evolution Gaming',
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
      name: 'Texas Hold\'em',
      image: 'https://via.placeholder.com/300x200/D35400/FFFFFF?text=Texas+Hold%27em',
      provider: 'PokerStars',
      rtp: 'N/A',
      minBet: 0.01,
      maxBet: 1000,
      description: 'The world\'s most popular poker variant with tournaments and cash games.',
      features: ['Tournaments', 'Cash Games', 'Sit & Go']
    },
    {
      id: 'omaha',
      name: 'Omaha Hold\'em',
      image: 'https://via.placeholder.com/300x200/7F8C8D/FFFFFF?text=Omaha',
      provider: 'PokerStars',
      rtp: 'N/A',
      minBet: 0.02,
      maxBet: 500,
      description: 'Four-card poker variant with more action and bigger pots.',
      features: ['PLO', 'Fixed Limit', 'Multi-table']
    },
    {
      id: 'seven-card-stud',
      name: 'Seven Card Stud',
      image: 'https://via.placeholder.com/300x200/95A5A6/FFFFFF?text=7+Card+Stud',
      provider: 'Classic Poker',
      rtp: 'N/A',
      minBet: 0.05,
      maxBet: 200,
      description: 'Classic poker variant with no community cards and strategic play.',
      features: ['Fixed Limit', 'Ante Games', 'Hi-Lo Split']
    }
  ]
};

module.exports = games;
