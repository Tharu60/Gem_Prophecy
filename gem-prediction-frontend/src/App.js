// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome'; // Import the Welcome page
import Home from './pages/Home';
import AboutUs from './pages/AbouteUs';
import ContactUs from './pages/ContactUs';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Predictions from './pages/Predictions';
import PricePrediction from './pages/PricePrediction';
import UserProfile from './pages/UserProfile';
import VarietyPrediction from './pages/VarietyPrediction';
import HistoryOfGems from './pages/HistoryOfGems';
import FamousGemstones from './pages/FamousGemstones';
import GemCutting from './pages/GemCutting';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Welcome />} /> {/* Set Welcome as the default route */}
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/predictions" element={<Predictions />} />
        <Route path="/price-prediction" element={<PricePrediction />} />
        <Route path="/user-profile" element={<UserProfile />} />
        <Route path="/variety-prediction" element={<VarietyPrediction />} />
        <Route path="/history-of-gems" element={<HistoryOfGems />} />
        <Route path="/famous-gemstones" element={<FamousGemstones />} />
        <Route path="/gem-cutting" element={<GemCutting />} />  
      </Routes>
    </Router>
  );
}

export default App;
