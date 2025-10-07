import { GameMetadataByCategory } from '../types/Game';

// Generate dynamic metadata for games
const generateMetadata = (): GameMetadataByCategory => {
  const now = new Date();
  
  return {
    slots: {
      'mega-fortune': {
        currentJackpot: '$2,847,392',
        recentWins: [
          { amount: '$15,420', time: '2 minutes ago' },
          { amount: '$8,750', time: '7 minutes ago' },
          { amount: '$23,100', time: '12 minutes ago' }
        ],
        playersOnline: 1247
      },
      'starburst': {
        hotStreak: true,
        recentWins: [
          { amount: '$2,340', time: '1 minute ago' },
          { amount: '$890', time: '4 minutes ago' },
          { amount: '$5,670', time: '9 minutes ago' }
        ],
        playersOnline: 892
      },
      'gonzo-quest': {
        bonusRound: 'Active',
        recentWins: [
          { amount: '$1,250', time: '3 minutes ago' },
          { amount: '$4,500', time: '8 minutes ago' }
        ],
        playersOnline: 634
      },
      'book-of-dead': {
        freeSpinsActive: true,
        recentWins: [
          { amount: '$12,800', time: '5 minutes ago' },
          { amount: '$3,400', time: '11 minutes ago' }
        ],
        playersOnline: 756
      }
    },
    
    bingo: {
      'lucky-numbers': {
        nextGame: new Date(now.getTime() + 3 * 60000).toISOString(), // 3 minutes from now
        currentPrize: '$1,250',
        playersWaiting: 45,
        roomCapacity: 100
      },
      'rainbow-riches-bingo': {
        nextGame: new Date(now.getTime() + 7 * 60000).toISOString(), // 7 minutes from now
        currentPrize: '$890',
        playersWaiting: 32,
        roomCapacity: 75
      },
      'speed-bingo': {
        nextGame: new Date(now.getTime() + 1 * 60000).toISOString(), // 1 minute from now
        currentPrize: '$450',
        playersWaiting: 28,
        roomCapacity: 50
      }
    },
    
    'live-dealer': {
      'live-blackjack': {
        dealerName: 'Sarah',
        tableStatus: 'Active',
        playersAtTable: 5,
        maxPlayers: 7,
        recentHands: [
          { result: 'Player Win', cards: ['K♠', 'A♥'], dealerCards: ['10♣', '6♦', '8♠'] },
          { result: 'Dealer Win', cards: ['9♦', '7♣'], dealerCards: ['A♠', '10♥'] },
          { result: 'Player Win', cards: ['Q♥', 'J♠'], dealerCards: ['K♦', '5♣', '9♥'] },
          { result: 'Push', cards: ['10♠', '10♦'], dealerCards: ['A♣', '9♠'] },
          { result: 'Player Win', cards: ['A♦', '9♣'], dealerCards: ['10♠', '8♥', '5♦'] }
        ]
      },
      'live-roulette': {
        dealerName: 'Michael',
        tableStatus: 'Betting Open',
        playersAtTable: 8,
        maxPlayers: 12,
        recentResults: [
          { number: 17, color: 'black' },
          { number: 32, color: 'red' },
          { number: 0, color: 'green' },
          { number: 24, color: 'black' },
          { number: 15, color: 'black' },
          { number: 29, color: 'black' },
          { number: 8, color: 'black' },
          { number: 11, color: 'black' }
        ],
        hotNumbers: [17, 24, 15, 29, 8, 11],
        coldNumbers: [1, 3, 12, 22, 35]
      },
      'live-baccarat': {
        dealerName: 'Elena',
        tableStatus: 'Active',
        playersAtTable: 6,
        maxPlayers: 8,
        recentResults: [
          { winner: 'Banker', bankerCards: ['K♥', '9♠'], playerCards: ['7♦', '2♣'] },
          { winner: 'Player', bankerCards: ['5♠', '3♦'], playerCards: ['A♥', '8♠'] },
          { winner: 'Banker', bankerCards: ['Q♣', '10♥'], playerCards: ['6♠', '3♥'] },
          { winner: 'Tie', bankerCards: ['7♦', '2♠'], playerCards: ['9♣', '0♥'] },
          { winner: 'Player', bankerCards: ['4♥', '4♠'], playerCards: ['A♦', '7♣'] }
        ]
      },
      'live-poker': {
        dealerName: 'James',
        tableStatus: 'Active',
        playersAtTable: 4,
        maxPlayers: 6,
        currentJackpot: '$45,892',
        recentHands: [
          { result: 'Player Win', hand: 'Full House', payout: '$450' },
          { result: 'House Win', hand: 'High Card', payout: '$0' },
          { result: 'Player Win', hand: 'Two Pair', payout: '$120' }
        ]
      }
    },
    
    poker: {
      'texas-holdem': {
        nextTournament: new Date(now.getTime() + 15 * 60000).toISOString(), // 15 minutes from now
        tournamentName: 'Daily Deepstack',
        buyIn: '$50',
        guaranteedPrize: '$10,000',
        playersRegistered: 127,
        maxPlayers: 200,
        cashGames: {
          active: 23,
          stakes: ['$0.01/$0.02', '$0.05/$0.10', '$0.25/$0.50', '$1/$2', '$2/$5']
        }
      },
      'omaha': {
        nextTournament: new Date(now.getTime() + 45 * 60000).toISOString(), // 45 minutes from now
        tournamentName: 'PLO Bounty Hunter',
        buyIn: '$25',
        guaranteedPrize: '$5,000',
        playersRegistered: 89,
        maxPlayers: 150,
        cashGames: {
          active: 12,
          stakes: ['$0.02/$0.05', '$0.10/$0.25', '$0.50/$1', '$1/$2']
        }
      },
      'seven-card-stud': {
        nextTournament: new Date(now.getTime() + 90 * 60000).toISOString(), // 90 minutes from now
        tournamentName: 'Stud Championship',
        buyIn: '$100',
        guaranteedPrize: '$15,000',
        playersRegistered: 45,
        maxPlayers: 100,
        cashGames: {
          active: 6,
          stakes: ['$0.05/$0.10', '$0.25/$0.50', '$1/$2']
        }
      }
    }
  };
};

export default generateMetadata();
