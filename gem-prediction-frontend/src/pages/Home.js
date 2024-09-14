// src/pages/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Import custom CSS for styling

function Home() {
  return (
    <div className="home-container container my-5">
      <div className="row">
        {/* About Gem Prophecy as a Card */}
        <div className="col-12 mb-4">
          <div className="card h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="card-title">About Gem Prophecy</h2>
              <p className="card-text">
                Gem Prophecy is an advanced AI-powered system designed to accurately predict the variety and price of gemstones.
                Leveraging sophisticated algorithms and extensive data, our platform provides users with reliable insights into the gem market.
                Whether you're a gem dealer, collector, or enthusiast, Gem Prophecy offers a unique blend of precision and ease of use to enhance your gemstone-related decisions.
              </p>
              <Link to="/predictions" className="btn btn-primary mt-auto mx-auto">Explore Predictions</Link>
            </div>
          </div>
        </div>

        {/* Articles Section */}
        <div className="col-12">
          <h2>Articles</h2>

          <div className="row">
            {/* Article 1: The History of Gems in Sri Lanka */}
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">The History of Gems in Sri Lanka (Ceylon)</h5>
                  <p className="card-text">
                    Discover the rich history of gems in Sri Lanka, a country renowned for its exquisite gemstones for millennia...
                  </p>
                  <Link to="/history-of-gems" className="btn btn-primary mt-auto">Read More</Link>
                </div>
              </div>
            </div>

            {/* Article 2: World Famous Gemstones from Sri Lanka */}
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">World Famous Gemstones from Sri Lanka</h5>
                  <p className="card-text">
                    Explore some of the most famous gemstones originating from Sri Lanka, highlighting their unique characteristics...
                  </p>
                  <Link to="/famous-gemstones" className="btn btn-primary mt-auto">Read More</Link>
                </div>
              </div>
            </div>

            {/* Article 3: Gem Cutting & Polishing */}
            <div className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body d-flex flex-column">
                  <h5 className="card-title">Gem Cutting & Polishing</h5>
                  <p className="card-text">
                    Learn about the art of gem cutting and polishing, a crucial step in transforming rough stones into brilliant gems...
                  </p>
                  <Link to="/gem-cutting" className="btn btn-primary mt-auto">Read More</Link>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
