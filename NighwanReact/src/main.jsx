import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './assets/css/bootstrap.min.css';
import './assets/css/swiper-bundle.min.css';
import './assets/css/style.css';
import './assets/css/responsive.css';
import MetaTags from './components/MetaTags';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <MetaTags />
    <App />
  </React.StrictMode>
);