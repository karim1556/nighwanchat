import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import bgShape3 from '../../assets/imgs/bg-shape-3.svg'; // Updated image import path
import aboutService7 from '../../assets/imgs/about-service-7.jpg'; // Updated image import path

const AboutService3Area = () => {
  return (
    <section className="about-service3-area about-service3-style-2">
      <img
        src={bgShape3}
        alt="Shape"
        className="animation-slide-right bg-shape"
      />
      <div className="custom-container">
        <div className="custom-row align-items-center">
          <div className="img-box">
            <img src={aboutService7} alt="About" />
          </div>

          <div className="content-box">
            <h5 className="section-subtitle">IMPORTANCE</h5>
            <h1 className="section-title">The Role of Developers</h1>
            <p>
              Software developers, often referred to as coders or programmers, are the creative
              minds behind the digital innovations we use daily.
            </p>
            <ul>
              <li>
                <i className="las la-check"></i> PPD Development
              </li>
              <li>
                <i className="las la-check"></i> Easy to Use
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService3Area;