# 🎰 Casino Lobby - Technical Challenge

A full-stack casino lobby application built with React TypeScript frontend and Node.js Express backend. This project serves as a technical interview challenge for junior software engineers. For challenge instructions, see here: [CHALLENGE.md](./CHALLENGE.md)

## 🎯 Challenge Overview

Build a casino lobby application that displays different game categories (Slots, Bingo, Live Dealer, Poker) with game tiles that show game information in modals. The application should demonstrate proficiency in:

- React with TypeScript
- Component architecture and state management
- API integration and error handling
- Responsive design and modern CSS
- Node.js/Express backend development
- RESTful API design

## 🏗️ Architecture

### Frontend (React + TypeScript)
- **Framework**: React 18 with TypeScript
- **Routing**: React Router DOM
- **Styling**: CSS Modules with modern CSS features
- **State Management**: React hooks (useState, useEffect)
- **API Client**: Fetch API with custom service layer

### Backend (Node.js + Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **Security**: Helmet.js, CORS
- **Data**: Mock data with dynamic metadata generation

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- Yarn (v1.22 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd casino-pairing
   ```

2. **Install dependencies for all workspaces**
   ```bash
   yarn install
   ```

3. **Start the development servers**
   ```bash
   yarn dev
   ```

   This will start:
   - Backend server on `http://localhost:3001`
   - Frontend development server on `http://localhost:3000`

### Alternative: Start servers individually

**Backend:**
```bash
yarn workspace backend dev
```

**Frontend:**
```bash
yarn workspace frontend start
```

### Yarn Workspace Commands

```bash
# Install dependencies for all workspaces
yarn install

# Run a command in a specific workspace
yarn workspace casino-backend <command>
yarn workspace casino-frontend <command>

# Build all projects
yarn build

# Type check all projects
yarn type-check

# Clean build artifacts
yarn clean
```

## 📁 Project Structure

```
casino-pairing/                    # Yarn workspace root
├── backend/                       # Backend workspace
│   ├── src/
│   │   ├── data/
│   │   │   ├── games.ts          # Game data (TypeScript)
│   │   │   └── metadata.ts       # Dynamic game metadata (TypeScript)
│   │   ├── types/
│   │   │   └── Game.ts           # Backend TypeScript interfaces
│   │   └── server.ts             # Express server (TypeScript)
│   ├── dist/                     # Compiled JavaScript output
│   ├── tsconfig.json             # TypeScript configuration
│   └── package.json              # Backend dependencies
├── frontend/                     # Frontend workspace
│   ├── public/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Header.tsx        # Navigation header
│   │   │   ├── GameTile.tsx      # Game tile component
│   │   │   └── GameInfoModal.tsx     # Game info modal
│   │   ├── pages/
│   │   │   ├── HomePage.tsx      # Landing page
│   │   │   ├── SlotsPage.tsx     # Slots games
│   │   │   ├── BingoPage.tsx     # Bingo games
│   │   │   ├── LiveDealerPage.tsx # Live dealer games
│   │   │   └── PokerPage.tsx     # Poker games
│   │   ├── services/
│   │   │   └── api.ts            # API service layer
│   │   ├── types/
│   │   │   └── Game.ts           # Frontend TypeScript interfaces
│   │   ├── App.tsx
│   │   └── index.tsx
│   ├── tsconfig.json             # TypeScript configuration
│   └── package.json              # Frontend dependencies
├── package.json                  # Workspace configuration
├── yarn.lock                     # Yarn lockfile
└── .yarnrc                       # Yarn configuration
```

## 🔌 API Endpoints

### Games API

#### Get Games by Category
```
GET /api/games/:category
```
Returns a list of games for the specified category.

**Categories**: `slots`, `bingo`, `live-dealer`, `poker`

**Response:**
```json
{
  "category": "slots",
  "games": [
    {
      "id": "mega-fortune",
      "name": "Mega Fortune",
      "image": "https://...",
      "provider": "NetEnt",
      "rtp": "96.6%",
      "minBet": 0.25,
      "maxBet": 50,
      "description": "...",
      "features": ["Progressive Jackpot", "Free Spins"]
    }
  ]
}
```

#### Get Game Metadata
```
GET /api/games/:category/:gameId/metadata
```
Returns dynamic metadata for a specific game (live stats, next games, etc.).

**Response varies by category:**
- **Slots**: Current jackpot, recent wins, players online
- **Bingo**: Next game time, current prize, players waiting
- **Live Dealer**: Dealer info, table status, recent results
- **Poker**: Tournament info, cash games, registration stats

#### Get Game Information
```
GET /api/games/:category/:gameId/info
```
Returns detailed game information including description, RTP, betting limits, and features.

#### Health Check
```
GET /api/health
```
Returns server status and timestamp.

## 🎮 Features

### Frontend Features
- **Responsive Design**: Works on desktop, tablet, and mobile
- **Game Categories**: Slots, Bingo, Live Dealer, Poker
- **Game Tiles**: Image, provider, RTP, betting range
- **Info Modals**: Detailed game information with live metadata
- **Modern UI**: Glassmorphism design with smooth animations
- **Error Handling**: Graceful error states and loading indicators

### Backend Features
- **RESTful API**: Clean, predictable endpoints
- **Mock Data**: Realistic game data with 16+ games
- **Dynamic Metadata**: Time-based data that updates
- **Error Handling**: Proper HTTP status codes and error messages
- **Security**: CORS, Helmet.js for basic security headers

## 🎨 Design System

### Color Palette
- **Primary Gradient**: `#667eea` to `#764ba2`
- **Background**: Gradient background with glassmorphism effects
- **Cards**: White with transparency and backdrop blur
- **Text**: Dark gray (`#333`) for headings, lighter gray (`#666`) for body text

### Typography
- **System Fonts**: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto
- **Headings**: 600-700 font weight
- **Body**: 400 font weight with 1.6 line height

### Components
- **Cards**: Rounded corners (16-20px), subtle shadows, hover animations
- **Buttons**: Gradient backgrounds, hover effects, proper focus states
- **Modals**: Backdrop blur, slide-in animations, responsive design

## 🧪 Testing the Application

### Manual Testing Checklist

1. **Navigation**
   - [ ] All navigation links work correctly
   - [ ] Active page is highlighted in navigation
   - [ ] Logo links back to home page

2. **Game Pages**
   - [ ] All game categories load games successfully
   - [ ] Game tiles display correctly with images and info
   - [ ] Loading states appear while fetching data
   - [ ] Error states display when API fails

3. **Game Modals**
   - [ ] Info button opens modal with game details
   - [ ] Modal displays game metadata correctly
   - [ ] Modal can be closed by clicking backdrop or X button
   - [ ] Play/Demo buttons log to console

4. **Responsive Design**
   - [ ] Application works on mobile devices
   - [ ] Navigation adapts to smaller screens
   - [ ] Game grid adjusts to screen size
   - [ ] Modals are mobile-friendly

5. **API Integration**
   - [ ] All API endpoints return expected data
   - [ ] Error handling works when server is down
   - [ ] Loading states appear during API calls

## 🔧 Technical Decisions

### Frontend Architecture
- **Component Structure**: Separation of concerns with reusable components
- **State Management**: Local state with hooks (suitable for this scale)
- **Styling**: CSS files co-located with components for maintainability
- **Type Safety**: Comprehensive TypeScript interfaces for all data structures

### Backend Architecture
- **Data Layer**: Mock data in separate modules for easy modification
- **Middleware**: Security and CORS middleware for production readiness
- **Error Handling**: Centralized error handling with proper HTTP codes
- **Dynamic Data**: Time-based metadata generation for realistic feel

## 🚧 Potential Enhancements

### For Extended Challenge
1. **Add search and filtering functionality**
2. **Implement user authentication**
3. **Add favorites system**
4. **Include game categories filtering**
5. **Add pagination for large game lists**
6. **Implement real-time updates with WebSockets**
7. **Add unit and integration tests**
8. **Include game launch functionality**
9. **Add progressive web app features**
10. **Implement caching strategies**

### Performance Optimizations
- Image lazy loading (already implemented)
- API response caching
- Component memoization
- Bundle splitting
- CDN integration for images

## 📝 Evaluation Criteria

This challenge evaluates:

### Technical Skills (60%)
- **React/TypeScript proficiency**: Component design, hooks usage, type safety
- **API integration**: Error handling, loading states, data flow
- **Code organization**: File structure, separation of concerns, reusability
- **CSS/Styling**: Modern CSS, responsive design, visual hierarchy

### Problem Solving (25%)
- **Architecture decisions**: Component structure, state management
- **Error handling**: Graceful degradation, user experience
- **Performance considerations**: Loading optimization, responsive design

### Code Quality (15%)
- **Readability**: Clear naming, consistent formatting
- **Best practices**: React patterns, TypeScript usage
- **Documentation**: Code comments, README completeness

## 🎯 Success Metrics

A successful implementation should:
- ✅ Display all game categories with proper navigation
- ✅ Show game tiles with images and basic information
- ✅ Open modals with detailed game information and metadata
- ✅ Handle loading and error states gracefully
- ✅ Work responsively across different screen sizes
- ✅ Demonstrate clean, maintainable code structure
- ✅ Show understanding of React/TypeScript best practices

## 📞 Support

For questions about this challenge, please refer to:
- API documentation in this README
- Code comments throughout the application
- TypeScript interfaces for data structures
- Console logs for debugging information

---

**Good luck with the challenge! 🎰**
