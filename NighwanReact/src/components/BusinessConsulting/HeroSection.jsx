import React from 'react';
import bgShape5 from '../../assets/imgs/bg-shape-5.svg'; // Adjust the path to your assets
import bgShape6 from '../../assets/imgs/bg-shape-6.svg';
import smallImg1 from '../../assets/imgs/small-img-1.png';
import smallImg2 from '../../assets/imgs/small-img-2.png';
import smallImg3 from '../../assets/imgs/small-img-3.png';
import smallImg4 from '../../assets/imgs/small-img-4.png';
import '../../assets/css/style.css'; // Import your custom CSS
import '../../assets/css/responsive.css'; // Import your responsive CSS

const HeroSection = () => {
  return (
    <section className="hero-section-wrap hero-home2">
      <div className="hero-section-content-wrap">
        <img className="bg-shape slide-left" src={bgShape6} alt="Shape" />
        <img className="bg-shape2 slide-right" src={bgShape5} alt="Shape" />
        <div className="custom-container">
          <div className="hero-section-content text-center">
            <h5 className="section-subtitle">ACCELERATED GROWTH</h5>
            <h1 className="section-title fade-in">
              Empowering business with modern rules and insights
            </h1>
            <p>
              Welcome to slack business consulting and solutions, where success is not just a
              destination.
            </p>
            <a href="#" className="theme-btn2">
              Let’s talk to our team <i className="iconoir-arrow-up-right"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="custom-container">
        <div className="hero-contact-form-wrap">
          <div className="hero-contact-form-inner-wrap">
            <div className="mac-btns-wrap d-flex align-items-center justify-content-between">
              <div className="mac-buttons d-flex align-items-center">
                <span></span>
                <span></span>
                <span></span>
              </div>

              <div className="action-btn d-flex align-items-center">
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>

            <div className="hero-contact-form-header d-flex align-items-center justify-content-between">
              <p>
                You can reach us anytime via{' '}
                <a href="mailto:bluebase@mail.com">bluebase@mail.com</a>
              </p>

              <a href="#" className="our-expert-team-box d-flex align-items-center">
                <div className="our-expert-team-box-inner d-flex align-items-center">
                  <div className="imgs d-flex align-items-center">
                    <img src={smallImg4} alt="team" />
                    <img src={smallImg3} alt="team" />
                    <img src={smallImg2} alt="team" />
                    <img src={smallImg1} alt="team" />
                  </div>
                  <p>
                    Meet
                    <span>Our Experts</span>
                  </p>
                </div>
              </a>
            </div>

            <div className="hero-contact-form">
              <form
                action="https://wpriverthemes.com/HTML/synck/assets/mail/contact2.php"
                method="POST"
                className="contact-form d-flex"
              >
                <div className="input-main-row">
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="first_name">First Name</label>
                      <input
                        type="text"
                        placeholder="First Name"
                        id="first_name"
                        name="first_name"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="last_name">Last Name</label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        id="last_name"
                        name="last_name"
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        placeholder="Your Email"
                        id="email"
                        name="email"
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group phone-number">
                      <select className="number-prefix">
                        <option value="uk">UK</option>
                        <option value="us">US</option>
                      </select>
                      <label htmlFor="phone_number">Phone Number</label>
                      <input
                        type="text"
                        name="phone_number"
                        placeholder="Your Number"
                      />
                    </div>
                    <div className="input-group">
                      <label htmlFor="country">Country</label>
                      <input
                        type="text"
                        name="country"
                        placeholder="Your Country"
                      />
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>What's the type of your company?</label>
                      <div className="choice-a-company flex-wrap d-flex">
                        <div className="radio-box">
                          <input type="radio" id="saas" name="choice_company" value="SAAS" />
                          <label htmlFor="saas">SAAS</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" id="banking" name="choice_company" value="Banking" />
                          <label htmlFor="banking">Banking</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" id="agency" name="choice_company" value="Agency" />
                          <label htmlFor="agency">Agency</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" id="business" name="choice_company" value="Business" />
                          <label htmlFor="business">Business</label>
                        </div>
                        <div className="radio-box">
                          <input type="radio" id="other" name="choice_company" value="Other" />
                          <label htmlFor="other">Other</label>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label>What you need from us?</label>
                      <div className="feedback-checkboxes d-flex flex-wrap">
                        <div className="feedback-item">
                          <input type="checkbox" id="app_design" name="services[]" value="App design" />
                          <label htmlFor="app_design">App design</label>
                        </div>
                        <div className="feedback-item">
                          <input type="checkbox" id="web_design" name="services[]" value="Web design" />
                          <label htmlFor="web_design">Web design</label>
                        </div>
                        <div className="feedback-item">
                          <input type="checkbox" id="branding" name="services[]" value="Branding" />
                          <label htmlFor="branding">Branding</label>
                        </div>
                        <div className="feedback-item">
                          <input type="checkbox" id="development" name="services[]" value="Development" />
                          <label htmlFor="development">Development</label>
                        </div>
                        <div className="feedback-item">
                          <input type="checkbox" id="cloud_service" name="services[]" value="Cloud service" />
                          <label htmlFor="cloud_service">Cloud service</label>
                        </div>
                        <div className="feedback-item">
                          <input type="checkbox" id="other" name="services[]" value="Other" />
                          <label htmlFor="other">Other</label>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="input-main-row">
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="message">Message</label>
                      <textarea
                        name="message"
                        id="message"
                        placeholder="Leave us a message...."
                      ></textarea>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <label htmlFor="budget">Budget</label>
                      <input
                        id="pi_input"
                        type="range"
                        min="0"
                        max="200"
                        step="1"
                        style={{ padding: 0 }}
                        name="budget"
                      />
                      <div className="budget-values d-flex align-items-center justify-content-between w-full">
                        <div className="left-value">
                          $<span id="budget-value">300</span>k
                        </div>
                        <div className="right-value">$200k</div>
                      </div>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group input-checkbox">
                      <input
                        type="checkbox"
                        id="privacy_policy_accept"
                        name="privacy_policy_accept"
                        value="1"
                      />
                      <label htmlFor="privacy_policy_accept">
                        Click the box and agree to our{' '}
                        <a href="#">terms and conditions.</a>
                      </label>
                    </div>
                  </div>
                  <div className="input-row">
                    <div className="input-group">
                      <button className="theme-btn" id="submit">
                        Get Started
                      </button>
                    </div>
                  </div>
                  {/* Alert Message */}
                  <div className="input-row">
                    <div className="input-group alert-notification">
                      <div id="alert-message" className="alert-msg"></div>
                    </div>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;