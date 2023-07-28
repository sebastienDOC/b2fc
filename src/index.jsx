import React from 'react';
import ReactDOM from 'react-dom/client';
import Header from './components/Header';
import About from './components/Presentation';
import Gallery from './components/Gallerie/Gallery';
import Footer from './components/Footer';
import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Header />
    <About />
    <Gallery />
    <Footer />
  </React.StrictMode>
);