import { Request, Response } from 'express';
import { getGameInfo } from './gameInfo';
import { isValidCategory } from '../utils';

// Mock the data and utils
jest.mock('../data/gameInfo', () => ({
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
      id: 'simple-slot',
      rtp: '95.0%',
      minBet: 0.05,
      maxBet: 25,
      description: 'A simple slot game.',
      features: undefined
    }
  ],
  bingo: [
    {
      id: 'bingo-bonanza',
      rtp: '95.0%',
      minBet: 0.10,
      maxBet: 10,
      description: 'Classic bingo game with multiple rooms and jackpots.',
      features: ['Multiple Rooms', 'Progressive Jackpot', 'Auto-Daub']
    }
  ],
  'live-dealer': [],
  poker: []
}));

jest.mock('../utils', () => ({
  isValidCategory: jest.fn()
}));

describe('GameInfo Service', () => {
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

  describe('getGameInfo', () => {
    it('should return game info for valid category and gameId', () => {
      // Arrange
      mockRequest.params = { category: 'slots', gameId: 'mega-fortune' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockResponse.json).toHaveBeenCalledWith({
        details: {
          description: 'A luxurious progressive jackpot slot with champagne, yachts, and diamond rings.',
          rtp: '96.6%',
          minBet: 0.25,
          maxBet: 50,
          features: ['Progressive Jackpot', 'Free Spins', 'Wild Symbols']
        }
      });
      expect(mockStatus).not.toHaveBeenCalled();
    });

    it('should return 404 for invalid category', () => {
      // Arrange
      mockRequest.params = { category: 'invalid-category', gameId: 'some-game' };
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

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
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Game not found' });
    });

    it('should return game info for bingo category', () => {
      // Arrange
      mockRequest.params = { category: 'bingo', gameId: 'bingo-bonanza' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(mockResponse.json).toHaveBeenCalledWith({
        details: {
          description: 'Classic bingo game with multiple rooms and jackpots.',
          rtp: '95.0%',
          minBet: 0.10,
          maxBet: 10,
          features: ['Multiple Rooms', 'Progressive Jackpot', 'Auto-Daub']
        }
      });
    });

    it('should handle game with no features', () => {
      // Arrange
      mockRequest.params = { category: 'slots', gameId: 'simple-slot' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(mockResponse.json).toHaveBeenCalledWith({
        details: {
          description: 'A simple slot game.',
          rtp: '95.0%',
          minBet: 0.05,
          maxBet: 25,
          features: []
        }
      });
    });

    it('should return 404 for empty category', () => {
      // Arrange
      mockRequest.params = { category: 'live-dealer', gameId: 'some-game' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('live-dealer');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Game not found' });
    });

    it('should handle undefined parameters', () => {
      // Arrange
      mockRequest.params = {};
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGameInfo(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith(undefined);
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Invalid category' });
    });
  });
});
