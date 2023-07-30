import React from 'react';
import ReactDOM from 'react-dom/client';
import { HashRouter } from 'react-router-dom';
import Header from './components/Header';
import Router from './components/Router';
import Footer from './components/Footer';
import './style/index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <Header />
        <Router />
      <Footer />
    </HashRouter>
  </React.StrictMode>
);