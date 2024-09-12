// src/App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import AboutUs from './pages/AbouteUs';
import ContactUs from './pages/Contactus';
import Login from './pages/Login';
import Registration from './pages/Registration';
import Predictions from './pages/Predictions';
import PricePrediction from './pages/PricePrediction';
import UserProfile from './pages/UserProfile';
import VarietyPrediction from './pages/VarietyPrediction';

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
      </Routes>
    </Router>
  );
}

export default App;
