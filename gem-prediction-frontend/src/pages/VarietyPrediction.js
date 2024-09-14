// src/pages/VarietyPrediction.js
import React, { useState } from 'react';
import './VarietyPrediction.css'; // Import custom CSS for styling

function VarietyPrediction() {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedFile) {
      // Handle the file upload logic here
      console.log('File selected:', selectedFile);
    } else {
      alert('Please choose a file to predict the gem variety.');
    }
  };

  return (
    <div className="variety-prediction-container container my-5">
      <div className="card mx-auto shadow-lg">
        <div className="card-body">
          <h2 className="text-center mb-4">Predict Your Gem Variety Here</h2>
          <form onSubmit={handleSubmit} className="d-flex flex-column align-items-center">
            <button type="button" className="btn btn-primary mb-3 w-100">
              Choose File
            </button>
            <input
              type="file"
              className="form-control-file mb-3 w-100"
              onChange={handleFileChange}
            />
            <button type="submit" className="btn btn-primary w-100">
              Predict
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default VarietyPrediction;
