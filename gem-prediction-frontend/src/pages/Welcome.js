// src/pages/Welcome.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Welcome.css'; // Import custom CSS for styling
import welcomeImage from '../img/welcom_img.jpg'; // Correct import for the image

function Welcome() {
  return (
    <div className="welcome-overlay">
      <div className="welcome-container row mx-0">
        {/* Text and Buttons Section */}
        <div className="col-md-6 d-flex flex-column justify-content-center align-items-center p-4">
          <h1 className="mb-3 text-center">Welcome to Gem Prophecy</h1>
          <p className="lead mb-4 text-center">
          Unlock the power of AI with Gem Prophecy, your ultimate solution for precise gem price and variety predictions. Explore unparalleled accuracy in gemstone valuation and identification.
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
            src={welcomeImage} // Use the imported image
            alt="Welcome img"
            className="img-fluid welcome-image"
          />
        </div>
      </div>
    </div>
  );
}

export default Welcome;
