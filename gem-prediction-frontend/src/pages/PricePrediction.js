// src/pages/PricePrediction.js
import React, { useState } from 'react';
import './PricePrediction.css'; // Import custom CSS for styling
import { useNavigate } from 'react-router-dom';

function PricePrediction() {
  const [formData, setFormData] = useState({
    carat: '',
    cut: '',
    colour: '',
    clarity: '',
    depth: '',
    table: '',
    xLength: '',
    yWidth: '',
    zHeight: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement your form submission logic here
    console.log('Form data submitted:', formData);
  };

  return (
    <div className="price-prediction-container container my-5">
      <div className="card mx-auto shadow-lg">
        <div className="card-body">
          <h3 className="text-center mb-4">Fill The Form For Prediction</h3>
          <form onSubmit={handleSubmit}>
            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="carat" className="form-label">
                  Weight ( Carat - ct )
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="carat"
                  name="carat"
                  placeholder="Carat"
                  value={formData.carat}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="cut" className="form-label">
                  Cut
                </label>
                <select
                  className="form-control"
                  id="cut"
                  name="cut"
                  value={formData.cut}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Cut
                  </option>
                  <option value="Fair">Fair</option>
                  <option value="Good">Good</option>
                  <option value="Very Good">Very Good</option>
                  <option value="Premium">Premium</option>
                  <option value="Ideal">Ideal</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="colour" className="form-label">
                  Colour
                </label>
                <select
                  className="form-control"
                  id="colour"
                  name="colour"
                  value={formData.colour}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Colour
                  </option>
                  <option value="D">D</option>
                  <option value="E">E</option>
                  <option value="F">F</option>
                  <option value="G">G</option>
                  <option value="H">H</option>
                  <option value="I">I</option>
                  <option value="J">J</option>
                </select>
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="clarity" className="form-label">
                  Clarity
                </label>
                <select
                  className="form-control"
                  id="clarity"
                  name="clarity"
                  value={formData.clarity}
                  onChange={handleChange}
                >
                  <option value="" disabled>
                    Select Clarity
                  </option>
                  <option value="I1">I1</option>
                  <option value="IF">IF</option>
                  <option value="SI1">SI1</option>
                  <option value="SI2">SI2</option>
                  <option value="VS1">VS1</option>
                  <option value="VS2">VS2</option>
                  <option value="VVS1">VVS1</option>
                  <option value="VVS2">VVS2</option>
                </select>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6 mb-3">
                <label htmlFor="depth" className="form-label">
                  Depth
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="depth"
                  name="depth"
                  placeholder="Depth"
                  value={formData.depth}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-6 mb-3">
                <label htmlFor="table" className="form-label">
                  Table
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="table"
                  name="table"
                  placeholder="Table"
                  value={formData.table}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-4 mb-3">
                <label htmlFor="xLength" className="form-label">
                  X ( Length )
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="xLength"
                  name="xLength"
                  placeholder="Length"
                  value={formData.xLength}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="yWidth" className="form-label">
                  Y ( Width )
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="yWidth"
                  name="yWidth"
                  placeholder="Width"
                  value={formData.yWidth}
                  onChange={handleChange}
                />
              </div>

              <div className="col-md-4 mb-3">
                <label htmlFor="zHeight" className="form-label">
                  Z ( Height )
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="zHeight"
                  name="zHeight"
                  placeholder="Height"
                  value={formData.zHeight}
                  onChange={handleChange}
                />
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <button type="button" className="btn btn-outline-dark w-100" onClick={() => navigate(-1)}>
                  Back
                </button>
              </div>
              <div className="col-md-6">
                <button type="submit" className="btn btn-outline-danger w-100">
                  Predict
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PricePrediction;
