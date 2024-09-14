// src/pages/Predictions.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Predictions.css'; // Import custom CSS for styling
import priceImage from '../img/price_prediction.jpg'; // Replace with actual path to your image
import varietyImage from '../img/variety_prediction.jpg'; // Replace with actual path to your image

function Predictions() {
  return (
    <div className="predictions-container">
      <h2 className="text-center mb-4">Choose Your Prediction</h2>
      <div className="row justify-content-center">
        {/* Card 1: GEM Price Prediction */}
        <div className="col-md-5 mb-4">
          <div className="card prediction-card">
            <img src={priceImage} className="card-img-top" alt="GEM Price Prediction" />
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title text-center">GEM Price Prediction</h5>
              <p className="card-text text-center">
                Use our AI-powered tool to accurately predict gemstone prices based on market trends and characteristics.
              </p>
              <Link to="/price-prediction" className="btn btn-primary mt-auto">Go to Price Prediction</Link>
            </div>
          </div>
        </div>

        {/* Card 2: GEM Variety Prediction */}
        <div className="col-md-5 mb-4">
          <div className="card prediction-card">
            <img src={varietyImage} className="card-img-top" alt="GEM Variety Prediction" />
            <div className="card-body d-flex flex-column align-items-center">
              <h5 className="card-title text-center">GEM Variety Prediction</h5>
              <p className="card-text text-center">
                Identify the variety of your gemstones with our advanced AI system, providing reliable and precise classification.
              </p>
              <Link to="/variety-prediction" className="btn btn-primary mt-auto">Go to Variety Prediction</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Predictions;
