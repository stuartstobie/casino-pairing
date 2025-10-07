import { Request, Response } from 'express';
import { getGamesByCategory } from './games';
import { isValidCategory } from '../utils';

jest.mock('../data/games', () => ({
  slots: [
    {
      id: 'mega-fortune',
      name: 'Mega Fortune',
      image: 'test-image-url',
      provider: 'NetEnt',
      rtp: '96.6%',
      minBet: 0.25,
      maxBet: 50
    },
    {
      id: 'starburst',
      name: 'Starburst',
      image: 'test-image-url-2',
      provider: 'NetEnt',
      rtp: '96.1%',
      minBet: 0.10,
      maxBet: 100
    }
  ],
  bingo: [
    {
      id: 'bingo-bonanza',
      name: 'Bingo Bonanza',
      image: 'bingo-image-url',
      provider: 'Pragmatic Play',
      rtp: '95.0%',
      minBet: 0.10,
      maxBet: 10
    }
  ],
  'live-dealer': [],
  poker: []
}));

jest.mock('../utils', () => ({
  isValidCategory: jest.fn()
}));

describe('Games Service', () => {
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

  describe('getGamesByCategory', () => {
    it('should return games for valid category', () => {
      // Arrange
      mockRequest.params = { category: 'slots' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGamesByCategory(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('slots');
      expect(mockResponse.json).toHaveBeenCalledWith({
        category: 'slots',
        games: [
          {
            id: 'mega-fortune',
            name: 'Mega Fortune',
            image: 'test-image-url',
            provider: 'NetEnt',
            rtp: '96.6%',
            minBet: 0.25,
            maxBet: 50
          },
          {
            id: 'starburst',
            name: 'Starburst',
            image: 'test-image-url-2',
            provider: 'NetEnt',
            rtp: '96.1%',
            minBet: 0.10,
            maxBet: 100
          }
        ]
      });
      expect(mockStatus).not.toHaveBeenCalled();
    });

    it('should return 404 for invalid category', () => {
      // Arrange
      mockRequest.params = { category: 'invalid-category' };
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGamesByCategory(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('invalid-category');
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Category not found' });
    });

    it('should return games for bingo category', () => {
      // Arrange
      mockRequest.params = { category: 'bingo' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGamesByCategory(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('bingo');
      expect(mockResponse.json).toHaveBeenCalledWith({
        category: 'bingo',
        games: [
          {
            id: 'bingo-bonanza',
            name: 'Bingo Bonanza',
            image: 'bingo-image-url',
            provider: 'Pragmatic Play',
            rtp: '95.0%',
            minBet: 0.10,
            maxBet: 10
          }
        ]
      });
    });

    it('should return empty games array for empty category', () => {
      // Arrange
      mockRequest.params = { category: 'live-dealer' };
      jest.mocked(isValidCategory).mockReturnValue(true);

      // Act
      getGamesByCategory(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith('live-dealer');
      expect(mockResponse.json).toHaveBeenCalledWith({
        category: 'live-dealer',
        games: []
      });
    });

    it('should handle undefined category parameter', () => {
      // Arrange
      mockRequest.params = {};
      jest.mocked(isValidCategory).mockReturnValue(false);

      // Act
      getGamesByCategory(mockRequest as Request, mockResponse as Response);

      // Assert
      expect(isValidCategory).toHaveBeenCalledWith(undefined);
      expect(mockStatus).toHaveBeenCalledWith(404);
      expect(mockJson).toHaveBeenCalledWith({ error: 'Category not found' });
    });
  });
});