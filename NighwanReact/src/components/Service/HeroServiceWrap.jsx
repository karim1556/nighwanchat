import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path

const HeroServiceWrap = () => {
  return (
    <section className="hero-service-wrap hero-section-wrap hero-overview-wrap">
      <div className="hero-section-content-wrap">
        <div className="custom-container">
          <div className="hero-portfolio-body">
            <div className="hero-section-content text-center">
              <h5 className="section-subtitle">Development</h5>
              <h1 className="section-title fade-in">
                Development is the pillar of our company
              </h1>
              <p>
                Software development is the process of designing, programming, testing,
                <br />
                and maintaining software applications and systems.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroServiceWrap;