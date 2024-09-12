// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import custom CSS for styling

function Welcome() {
  return (
    <div className="welcome-overlay">
      <div className="welcome-container row mx-0">
        {/* Text and Buttons Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="mb-4">Welcome to Gem Prediction</h1>
          <p className="lead mb-4">
            Explore our system to accurately identify and value gemstones with the power of AI.
          </p>
          <div>
            <Link to="/login" className="btn btn-outline-primary btn-lg mx-2">
              Login
            </Link>
            <Link to="/register" className="btn btn-primary btn-lg mx-2">
              Register
            </Link>
          </div>
        </div>
        {/* Image Section */}
        <div className="col-md-6 p-0">
          <img
            src={require('../img/welcome-img.jpg')} // Updated image path
            alt="Gemstone Illustration"
            className="img-fluid welcome-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
