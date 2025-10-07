import { Request, Response } from 'express';
import { getGameMetaData } from './gameMetaData';
import { isValidCategory } from '../utils';

jest.mock('../data/metadata', () => ({
  slots: {
    'mega-fortune': {
      currentJackpot: '$2,847,392',
      recentWins: [
        { amount: '$15,420', time: '2 minutes ago' },
        { amount: '$8,750', time: '7 minutes ago' }
      ],
      playersOnline: 1247,
      hotStreak: true,
      bonusRound: 'Wheel of Fortune',
      freeSpinsActive: false
    },
    'starburst': {
      currentJackpot: '$45,230',
      recentWins: [
        { amount: '$2,340', time: '1 minute ago' }
      ],
      playersOnline: 892,
      hotStreak: false,
      bonusRound: 'Expanding Wilds',
      freeSpinsActive: true
    }
  },
  bingo: {
    'bingo-bonanza': {
      nextGame: '3:45 PM',
      currentPrize: '$12,500',
      playersWaiting: 156,
      roomCapacity: 200
    }
  },
  'live-dealer': {
    'live-roulette': {
      dealerName: 'Emma',
      tableStatus: 'Open',
      playersAtTable: 6,
      maxPlayers: 8,
      recentResults: [
        { number: 17, color: 'black' },
        { number: 32, color: 'red' }
      ]
    }
  },
  poker: {
    'texas-holdem': {
      nextTournament: '8:00 PM',
      tournamentName: 'Sunday Million',
      buyIn: '$215',
      guaranteedPrize: '$1,000,000',
      playersRegistered: 4567,
      maxPlayers: 10000,
      cashGames: {
        active: 23,
        stakes: ['$0.50/$1', '$1/$2', '$2/$5']
      }
    }
  }
}));

jest.mock('../utils', () => ({
  isValidCategory: jest.fn()
}));

describe('GameMetaData Service', () => {
  let mockRequest: Partial<Request>;
  let mockResponse: Partial<Response>;
  let mockJson: jest.Mock;
  let mockStatus: jest.Mock;

  beforeEach(() => {
    mockJson = jest.fn();
    mockStatus = jest.fn().mockReturnValue({ json: mockJson });
    
    mockRequest = {};
    mockResponse = {
      json: mockJson,
      status: mockStatus
    };

    jest.clearAllMocks();
  });

  describe('getGameMetaData', () => {
    it('should return metadata for valid category and gameId', () => {
      // Arrange
      mockRequest.params = { category: 'slots', gameId: 'mega-fortune' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockResponse.json).toHaveBeenCalledWith({
        currentJackpot: '$2,847,392',
        recentWins: [
          { amount: '$15,420', time: '2 minutes ago' },
          { amount: '$8,750', time: '7 minutes ago' }
        ],
        playersOnline: 1247,
        hotStreak: true,
        bonusRound: 'Wheel of Fortune',
        freeSpinsActive: false
      });
      expect(mockStatus).not.toHaveBeenCalled();
    });

    it('should return 404 for invalid category', () => {
      // Arrange
      mockRequest.params = { category: 'invalid-category', gameId: 'some-game' };
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('invalid-category');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Invalid category' });
    });

    it('should return 404 for valid category but non-existent gameId', () => {
      // Arrange
      mockRequest.params = { category: 'slots', gameId: 'non-existent-game' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Game metadata not found' });
    });

    it('should return metadata for bingo category', () => {
      // Arrange
      mockRequest.params = { category: 'bingo', gameId: 'bingo-bonanza' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('bingo');
      expect(mockResponse.json).toHaveBeenCalledWith({
        nextGame: '3:45 PM',
        currentPrize: '$12,500',
        playersWaiting: 156,
        roomCapacity: 200
      });
    });

    it('should return metadata for live-dealer category', () => {
      // Arrange
      mockRequest.params = { category: 'live-dealer', gameId: 'live-roulette' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('live-dealer');
      expect(mockResponse.json).toHaveBeenCalledWith({
        dealerName: 'Emma',
        tableStatus: 'Open',
        playersAtTable: 6,
        maxPlayers: 8,
        recentResults: [
          { number: 17, color: 'black' },
          { number: 32, color: 'red' }
        ]
      });
    });

    it('should return metadata for poker category', () => {
      // Arrange
      mockRequest.params = { category: 'poker', gameId: 'texas-holdem' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('poker');
      expect(mockResponse.json).toHaveBeenCalledWith({
        nextTournament: '8:00 PM',
        tournamentName: 'Sunday Million',
        buyIn: '$215',
        guaranteedPrize: '$1,000,000',
        playersRegistered: 4567,
        maxPlayers: 10000,
        cashGames: {
          active: 23,
          stakes: ['$0.50/$1', '$1/$2', '$2/$5']
        }
      });
    });

    it('should handle undefined parameters', () => {
      // Arrange
      mockRequest.params = {};
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith(undefined);
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Invalid category' });
    });

    it('should return 404 when category exists but gameId does not', () => {
      // Arrange
      mockRequest.params = { category: 'slots', gameId: undefined } as any;
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameMetaData(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Game metadata not found' });
    });
  });
});
