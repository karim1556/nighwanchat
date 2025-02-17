import React from 'react';
import project1 from '../../assets/imgs/project-1.png'; // Adjust the path to your assets
import project2 from '../../assets/imgs/project-2.png';
import project3 from '../../assets/imgs/project-3.jpg';
import project4 from '../../assets/imgs/project-4.png';
import project5 from '../../assets/imgs/project-5.png';
import project6 from '../../assets/imgs/project-6.png';
import project7 from '../../assets/imgs/project-7.png';
import project8 from '../../assets/imgs/project-8.png';
import project9 from '../../assets/imgs/project-9.png';
import project10 from '../../assets/imgs/project-10.png';
import project11 from '../../assets/imgs/project-11.png';
import project12 from '../../assets/imgs/project-12.png';
import bgShape2 from '../../assets/imgs/bg-shape-2.svg';
import bgShape22 from '../../assets/imgs/bg-shape-2-2.svg';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const PortfolioArea = () => {
  return (
    <section className="portfolio-area">
      <div className="custom-container">
        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                  <a href="portfolio-details.html">
                    E-commerce <br />
                    platform <br />
                    development.
                  </a>
                </h2>
                <img src={project1} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <img src={bgShape2} alt="Shape" className="bg-shape" />
              <h3>
                <a href="portfolio-details.html">
                  Woo Commerce <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>A E-commerce site for London based company</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Electronic <br />
                    brand <br />
                    marketing.
                  </a>
                </h2>
                <img src={project2} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Branding for Studio <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Boosting service for electronic based company</p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Mobile app <br />
                    development <br />
                    in ios
                  </a>
                </h2>
                <img src={project3} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Swift App Development <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Mobile app for productivity in iPhone</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-black-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Get into a <br />
                    virtual reality <br />
                    world
                  </a>
                </h2>
                <img src={project4} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  VR Development <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Watch everything in virtual reality world</p>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-black-box portfolio-bluebase">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                  <a href="portfolio-details.html">
                    Cloud service <br />
                    developed by <br />
                    bluebase
                  </a>
                </h2>
                <img src={project5} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Cloud Service <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Building a server for a new start up company</p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Productivity <br />
                    app in your <br />
                    hand
                  </a>
                </h2>
                <img src={project6} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Application for Watch <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Our slack app for your wrist smartwatch</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Customer <br />
                    crm in <br />
                    salesforce
                  </a>
                </h2>
                <img src={project7} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <img src={bgShape22} alt="Shape" className="bg-shape" />
              <h3>
                <a href="portfolio-details.html">
                  CRM Solutions <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Customer relationship app using Salesforce</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-yellow-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    ERP solutions <br />
                    implemented <br />
                    bluebase
                  </a>
                </h2>
                <img src={project8} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  ERP Solutions <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Saas Service for a brand new Woo Commerce Company</p>
            </div>
          </div>
        </div>

        <div className="portfolio-items">
          <div className="portfolio-item-col portfolio-darkgray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2 className="white">
                  <a href="portfolio-details.html">
                    Unik personal <br />
                    portfolio on <br />
                    market
                  </a>
                </h2>
                <img src={project9} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Unik Personal Portfolio <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Personal portfolio that hits everybody resume</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-gray-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Perfect crm <br />
                    for market <br />
                    in salesforce
                  </a>
                </h2>
                <img src={project10} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Clean Dashboard <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Creating a dashboard for newly launched market</p>
            </div>
          </div>

          <div className="portfolio-item-col">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Premier support <br />
                    and solutions <br />
                    by bluebase
                  </a>
                </h2>
                <img src={project11} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <h3>
                <a href="portfolio-details.html">
                  Fast IT Support <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>Our team give a quick response for the clients</p>
            </div>
          </div>

          <div className="portfolio-item-col portfolio-indigo-box">
            <div className="project-item">
              <div className="project-item-inner">
                <h2>
                  <a href="portfolio-details.html">
                    Electro online <br />
                    platform <br />
                    development.
                  </a>
                </h2>
                <img src={project12} alt="Project" />
              </div>
            </div>
            <div className="portfolio-sample-details">
              <img className="bg-shape" src={bgShape2} alt="Shape" />
              <h3>
                <a href="portfolio-details.html">
                  Electro E-commerce <i className="iconoir-arrow-up-right"></i>
                </a>
              </h3>
              <p>A site that hits entire online themeforest site</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PortfolioArea;