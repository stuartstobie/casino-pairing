import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import SlotsPage from './pages/SlotsPage';
import LiveDealerPage from './pages/LiveDealerPage';
import PokerPage from './pages/PokerPage';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/slots" element={<SlotsPage />} />
            <Route path="/live-dealer" element={<LiveDealerPage />} />
            <Route path="/poker" element={<PokerPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
