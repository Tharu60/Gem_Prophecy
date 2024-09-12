// src/pages/Registration.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Registration.css'; // Import custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';

function Registration() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    role: '' // Added role to the form state
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.username) errors.username = 'Username is required';
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (formData.password !== formData.confirmPassword) errors.confirmPassword = 'Passwords do not match';
    if (!formData.role) errors.role = 'Role selection is required'; // Validate role selection
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Form submitted:', formData);
      // Integrate with backend API to submit the form data
      navigate('/login'); // Redirect to the login page after successful registration
    } else {
      setErrors(validationErrors);
    }
  };

  return (
    <div className="registration-container d-flex justify-content-center align-items-center">
      <div className="registration-box p-4">
        <h2 className="text-center mb-2">Register</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <label htmlFor="username" className="form-label">Username</label>
            <input
              type="text"
              className={`form-control ${errors.username ? 'is-invalid' : ''}`}
              id="username"
              name="username"
              value={formData.username}
              onChange={handleChange}
            />
            {errors.username && <div className="invalid-feedback">{errors.username}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="email" className="form-label">Email</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <div className="invalid-feedback">{errors.email}</div>}
          </div>
          <div className="mb-2">
            <label htmlFor="password" className="form-label">Password</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
            />
            {errors.password && <div className="invalid-feedback">{errors.password}</div>}
          </div>
          <div className="mb-3">
            <label htmlFor="confirmPassword" className="form-label">Confirm Password</label>
            <input
              type="password"
              className={`form-control ${errors.confirmPassword ? 'is-invalid' : ''}`}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
            />
            {errors.confirmPassword && <div className="invalid-feedback">{errors.confirmPassword}</div>}
          </div>

          {/* Horizontal Radio Buttons for Roles */}
          <div className="mb-3">
            <label className="form-label">Select Your Role</label>
            <div className="d-flex align-items-center gap-3">
              <div className="form-check">
                <input
                  className={`form-check-input ${errors.role ? 'is-invalid' : ''}`}
                  type="radio"
                  name="role"
                  id="roleDealer"
                  value="Gem Dealer"
                  checked={formData.role === 'Gem Dealer'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="roleDealer">
                  Gem Dealer
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${errors.role ? 'is-invalid' : ''}`}
                  type="radio"
                  name="role"
                  id="roleCustomer"
                  value="Gem Customer"
                  checked={formData.role === 'Gem Customer'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="roleCustomer">
                  Gem Customer
                </label>
              </div>
              <div className="form-check">
                <input
                  className={`form-check-input ${errors.role ? 'is-invalid' : ''}`}
                  type="radio"
                  name="role"
                  id="roleCollector"
                  value="Gem Collector"
                  checked={formData.role === 'Gem Collector'}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="roleCollector">
                  Gem Collector
                </label>
              </div>
            </div>
            {errors.role && <div className="invalid-feedback d-block">{errors.role}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-2">Register</button>
        </form>

        <hr className="my-2" />
        <h5 className="text-center mb-3">Or Register With</h5>

        {/* Icon-Only Small Buttons */}
        <div className="d-flex justify-content-center gap-2">
          <button className="btn btn-outline-danger btn-sm">
            <FontAwesomeIcon icon={faGoogle} />
          </button>

          <button className="btn btn-outline-primary btn-sm">
            <FontAwesomeIcon icon={faFacebook} />
          </button>

          <button className="btn btn-outline-dark btn-sm">
            <FontAwesomeIcon icon={faGithub} />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Registration;
