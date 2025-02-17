import React from 'react';
import news1 from '../assets/imgs/news-1.jpg'; // Adjust the path to your images
import news2 from '../assets/imgs/news-2.jpg';
import news3 from '../assets/imgs/news-3.jpg';
import news4 from '../assets/imgs/news-4.jpg';
import news5 from '../assets/imgs/news-5.jpg';
import news6 from '../assets/imgs/news-6.jpg';
import news7 from '../assets/imgs/news-7.jpg';
import '../assets/css/style.css'; // Import your custom CSS
import '../assets/css/responsive.css'; // Import your responsive CSS
import FeatureArea from '../components/Home/FeatureArea';
import ContactArea from '../components/Home/ContactArea';
import { Helmet } from 'react-helmet';    

const BlogPage = () => {
  return (
    <>
    <Helmet>
        <title>Blog - Nighwan Technology Pvt. Ltd.</title>
         <meta name="description" content="This is Blog page" />
        <meta name="robots" content="index, follow" />
        </Helmet>
      {/* Hero Blog Section */}
      <section className="hero-servic e-wrap hero-section-wrap hero-blog-wrap">
        <div className="hero-section-content-wrap">
          <div className="custom-container">
            <div className="hero-portfolio-body">
              <div className="hero-section-content text-center">
                <h5 className="section-subtitle">Blog</h5>
                <h1 className="section-title fade-in">
                  Explore our blog for expert knowledge and inspiration
                </h1>
                <p>
                  Stay connected with us by subscribing to our blog updates. By doing so, <br />
                  you'll receive notifications whenever we publish new articles.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* News Section */}
      <section className="news-area">
        <div className="custom-container">
          {/* Sticky News */}
          <div className="sticky-news d-flex card-h">
            <div className="news-img-box">
              <img src={news1} alt="News" />
            </div>
            <div className="news-content">
              <h5 className="section-subtitle">MOBILE DEVELOPMENT</h5>
              <h1 className="section-title">
                OpenAI launches new alignment division to tackle risks of superintelligent AI
              </h1>
              <p>
                The makers of AI have announced the company will be dedicating 20% of its compute
                processing power over the next four years
              </p>
              <ul>
                <li>
                  <i className="las la-check"></i> Collaboration Tools
                </li>
                <li>
                  <i className="las la-check"></i> Smart Reminders
                </li>
              </ul>
              <a href="/blog-detail" className="theme-btn">
                <i className="iconoir-arrow-up-right"></i>
              </a>
            </div>
          </div>

          {/* News Items */}
          <div className="news-items align-items-start">
            {/* News Item 1 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news2} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    Bluebase launches Tap to Pay on smartphone for international and domestic
                    business
                  </a>
                </h1>
                <p>
                  Small UK merchants, businesses, and other enterprises can now use Tap to Pay on
                  service to replace payment terminals at point of sale.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                  <li>
                    <i className="las la-check"></i> Task Management
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 2 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news3} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    Google Bard launches in EU, overcoming data privacy concerns in the region
                  </a>
                </h1>
                <p>
                  Small UK merchants, businesses, and other enterprises can now use Tap to Pay on
                  service to replace payment terminals at point of sale.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 3 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news4} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    Regulatory tech companies fear 25% knock-on hit from gaming GST
                  </a>
                </h1>
                <p>
                  But employees say whether the layoffs are fresh or previously announced, they’re
                  still losing their jobs.
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                  <li>
                    <i className="las la-check"></i> Task Management
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 4 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news5} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    UN Security Council discusses AI risks, need for ethical regulation
                  </a>
                </h1>
                <p>
                  The UN Security Council met with two artificial intelligence experts this week to
                  debate the benefit
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 5 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news6} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    New EU battery law could mean EOL for low-cost smartphones
                  </a>
                </h1>
                <p>
                  Apple might have wriggle room for the iPhone when it comes to new EU laws to make
                  smartphone batteries user replaceable
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                  <li>
                    <i className="las la-check"></i> Task Management
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>

            {/* News Item 6 */}
            <div className="news-item card-h">
              <div className="news-img-box">
                <img src={news7} alt="News" />
              </div>
              <div className="news-item-body">
                <h5 className="section-subtitle">WEB DEVELOPMENT</h5>
                <h1 className="section-title">
                  <a href="/blog-detail">
                    FTC reported to be investigating OpenAI for consumer protection violations
                  </a>
                </h1>
                <p>
                  OpenAI is reportedly under additional legal scrutiny, as the US Federal Trade
                  Commission asks the company to give detailed explanations
                </p>
                <ul>
                  <li>
                    <i className="las la-check"></i> Collaboration Tools
                  </li>
                  <li>
                    <i className="las la-check"></i> Smart Reminders
                  </li>
                  <li>
                    <i className="las la-check"></i> Requirement
                  </li>
                </ul>
                <a href="/blog-detail" className="theme-btn">
                  <i className="iconoir-arrow-up-right"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <FeatureArea />
      <ContactArea />
    </>
  );
};

export default BlogPage;
