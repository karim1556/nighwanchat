import React from 'react';
import '../../assets/css/style.css'; // Updated CSS import path
import '../../assets/css/responsive.css'; // Updated CSS import path
import serviceDetails2 from '../../assets/imgs/service-details-2.jpg'; // Updated image import path
import serviceDetails3 from '../../assets/imgs/service-details-3.jpg'; // Updated image import path

const AboutService7Area = () => {
  return (
    <section className="about-service7-area">
      <div className="custom-container">
        <div className="about-service7-body d-flex align-items-center">
          <div className="about-service7-content">
            <div className="section-header">
              <h5 className="section-subtitle">SOFTWARE DEVELOPMENT</h5>
              <h1 className="section-title">Engine of progress</h1>
              <p>Development as stone of innovation.</p>
            </div>
            <p>
              Software development is the stab process of designing, programming, solids to testing,
              and maintaining software as the applications and systems. It empowers us to turn ideas
            </p>
            <p>
              Software developers, often rest referred to as coders or programmers, are sat the
              creative minds behind the digital innovations we use daily. They possess a unique blend
              of
            </p>
            <p>
              Developers write lines of code by state using programming languages such as Python,
              Java, JavaScript, and C++,
            </p>
          </div>
          <div className="about-service7-img-box d-flex">
            <img src={serviceDetails2} alt="Service Details" />
            <img src={serviceDetails3} alt="Service Details" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutService7Area;