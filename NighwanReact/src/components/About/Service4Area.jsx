import React from 'react';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS
import serviceIcon1 from '../../assets/imgs/service-icon-1.svg'; // Import images
import serviceIcon2 from '../../assets/imgs/service-icon-2.svg';
import serviceIcon3 from '../../assets/imgs/service-icon-3.svg';
import serviceIcon4 from '../../assets/imgs/service-icon-4.svg';
import serviceIcon5 from '../../assets/imgs/service-icon-5.svg';

const Service4Area = () => {
  return (
    <section className="service4-area service-area">
      <div className="custom-container">
        <div className="service-section-header section-header d-flex align-items-end justify-content-between">
          <div className="left">
            <h5 className="section-subtitle">WHAT WE’RE OFFERING</h5>
            <h1 className="section-title">
              Dealing in all professional <br />IT services.
            </h1>
          </div>
          <p>
            One fundamental aspect of IT services is infrastructure management. This involves the
            design, implementation, and maintenance of the hardware, software, networks, and
            servers.
          </p>
        </div>

        <div className="services-list d-flex">
          <div className="service-card simple-shadow pop-in">
            <img src={serviceIcon1} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Development</a>
            </h3>
            <p>Our development is pixel perfect in all ways.</p>
          </div>
          <div className="service-card simple-shadow pop-in">
            <img src={serviceIcon2} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Woo Commerce</a>
            </h3>
            <p>We have a best team for your shopping websites.</p>
          </div>
          <div className="service-card simple-shadow pop-in">
            <img src={serviceIcon3} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">CRM Solutions</a>
            </h3>
            <p>We enhance customer experiences for success.</p>
          </div>
          <div className="service-card simple-shadow pop-in">
            <img src={serviceIcon4} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">Web Design</a>
            </h3>
            <p>We create vibrant, intuitive and minimalist web</p>
          </div>
          <div className="service-card simple-shadow pop-in">
            <span className="service-badge">Free!</span>
            <img src={serviceIcon5} alt="Service Icon" className="service-icon" />
            <h3>
              <a href="#">IT Support</a>
            </h3>
            <p>We offers expert assistance for your IT issues.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Service4Area;