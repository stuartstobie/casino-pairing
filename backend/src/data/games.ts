import { GamesByCategory } from '../types/Game';

const games: GamesByCategory = {
  slots: [
    {
      id: 'mega-fortune',
      name: 'Mega Fortune',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/mega-bars-jk/scale-1/mega-bars-jackpot-king-tile-15-972.jpg',
      provider: 'NetEnt',
      rtp: '96.6%',
      minBet: 0.25,
      maxBet: 50
    },
    {
      id: 'starburst',
      name: 'Starburst',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/starburst/scale-1/starburst-tile-15-972.jpg',
      provider: 'NetEnt',
      rtp: '96.1%',
      minBet: 0.10,
      maxBet: 100
    },
    {
      id: 'gonzo-quest',
      name: "Gonzo's Quest",
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/gonzos-quest/scale-1/gonzos-quest-tile-15-972.png',
      provider: 'NetEnt',
      rtp: '95.97%',
      minBet: 0.20,
      maxBet: 50
    },
    {
      id: 'book-of-dead',
      name: 'Book of Dead',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/tome-of-the-dead/scale-1/tome-of-the-dead-tile-15-972.jpg',
      provider: 'Play\'n GO',
      rtp: '94.25%',
      minBet: 0.01,
      maxBet: 100
    },
    {
      id: 'mega-fortune',
      name: 'Mega Fortune',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/mega-bars-jk/scale-1/mega-bars-jackpot-king-tile-15-972.jpg',
      provider: 'NetEnt',
      rtp: '96.6%',
      minBet: 0.25,
      maxBet: 50
    }
  ],
  
  bingo: [
    {
      id: 'lucky-numbers',
      name: 'Lucky Numbers Bingo',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/lucky-lemons/scale-1/lucky-lemons-tile-15-972.jpg',
      provider: 'Bingo Games Ltd',
      rtp: '95.0%',
      minBet: 0.10,
      maxBet: 5
    },
    {
      id: 'rainbow-riches-bingo',
      name: 'Rainbow Riches Bingo',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/rainbow-riches-deluxe/scale-1/rainbow-riches-deluxe-tile-15-972.jpg',
      provider: 'Scientific Games',
      rtp: '94.5%',
      minBet: 0.05,
      maxBet: 2
    },
    {
      id: 'speed-bingo',
      name: 'Speed Bingo',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/speed-bingo-logged-out/scale-1/speed-bingo-tile-15-972.jpg',
      provider: 'FastPlay Gaming',
      rtp: '96.2%',
      minBet: 0.25,
      maxBet: 10
    }
  ],
  
  'live-dealer': [
    {
      id: 'live-blackjack',
      name: 'Live Blackjack',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/single-deck-blackjack/scale-1/single-deck-blackjack-tile-15-972.jpg',
      provider: 'Evolution Gaming',
      rtp: '99.28%',
      minBet: 1,
      maxBet: 5000
    },
    {
      id: 'live-roulette',
      name: 'Live Roulette',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/roulette-live/scale-1/roulette-live-tile-15-972.jpg',
      provider: 'Evolution Gaming',
      rtp: '97.30%',
      minBet: 0.50,
      maxBet: 10000
    },
    {
      id: 'live-baccarat',
      name: 'Live Baccarat',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/speed-baccarat-nc-pt/scale-1/speed-baccarat-nc-pt-tile-15-972.jpg',
      provider: 'Playtech',
      rtp: '98.94%',
      minBet: 5,
      maxBet: 10000
    },
    {
      id: 'live-poker',
      name: 'Live Casino Hold\'em',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/bet-on-poker/scale-1/bet-on-poker-tile-15-972.jpg',
      provider: 'Evolution Gaming',
      rtp: '97.84%',
      minBet: 1,
      maxBet: 1000
    }
  ],
  
  poker: [
    {
      id: 'texas-holdem',
      name: 'Texas Hold\'em',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/casino-hold-em/scale-1/casino-hold-em-tile-15-972.jpg',
      provider: 'PokerStars',
      rtp: 'N/A',
      minBet: 0.01,
      maxBet: 1000
    },
    {
      id: 'omaha',
      name: 'Omaha Hold\'em',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/three-chance-poker/scale-1/three-chance-poker-tile-15-972.jpg',
      provider: 'PokerStars',
      rtp: 'N/A',
      minBet: 0.02,
      maxBet: 500
    },
    {
      id: 'seven-card-stud',
      name: 'Seven Card Stud',
      image: 'https://cdn.prd00.iedu.ballys.tech/ucn/jackpotjoy/api/content/gametiles/casino-stud-poker-pt/scale-1/casino-stud-poker-pt-tile-15-972.jpg',
      provider: 'Classic Poker',
      rtp: 'N/A',
      minBet: 0.05,
      maxBet: 200
    }
  ]
};

export default games;
