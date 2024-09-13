// src/pages/Login.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; // Import custom CSS for styling
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faFacebook, faGithub } from '@fortawesome/free-brands-svg-icons';
import ReCAPTCHA from 'react-google-recaptcha';

function Login() {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [captchaValid, setCaptchaValid] = useState(false); // State to track captcha validation
  const navigate = useNavigate();
  const recaptchaRef = React.createRef();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let errors = {};
    if (!formData.email) errors.email = 'Email is required';
    if (!formData.password) errors.password = 'Password is required';
    if (!captchaValid) errors.captcha = 'Please verify that you are not a robot';
    return errors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length === 0) {
      console.log('Login submitted:', formData);
      // Integrate with backend API to handle login
      navigate('/home'); // Redirect to the home page after successful login
    } else {
      setErrors(validationErrors);
    }
  };

  const handleCaptchaChange = (value) => {
    console.log('Captcha value:', value);
    setCaptchaValid(!!value); // Set captcha as valid if value exists
  };

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <div className="login-box p-4">
        <h2 className="text-center mb-3">Login</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
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
          <div className="mb-3">
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

          {/* reCAPTCHA */}
          <div className="mb-3 d-flex justify-content-center">
            <ReCAPTCHA
              ref={recaptchaRef}
              sitekey="YOUR_SITE_KEY" // Replace with your actual site key
              onChange={handleCaptchaChange}
            />
            {errors.captcha && <div className="text-danger">{errors.captcha}</div>}
          </div>

          <button type="submit" className="btn btn-primary w-100 mb-3">Login</button>
        </form>

        <hr className="my-3" />
        <h5 className="text-center mb-3">Or Login With</h5>

        {/* Icon-Only Small Buttons for Social Logins */}
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

export default Login;
