import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { HashRouter } from "react-router-dom";
import NavBar from './layouts/NavBar/NavBar';
import Footer from './layouts/Footer/Footer';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HashRouter>
      <NavBar/>
      <App />
      <Footer/>
    </HashRouter>
  </React.StrictMode>
);
