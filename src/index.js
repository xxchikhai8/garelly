import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './css/index.css';

import Header from './layouts/header';
import Footer from './layouts/footer';
import About from './pages/about';
import MainContent from './pages/contentmain';



ReactDOM.createRoot(document.getElementById("header-navbar")).render(
  <React.StrictMode>
    <Header />
  </React.StrictMode>
);

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainContent />} />
        <Route path="about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
};

ReactDOM.createRoot(document.getElementById("main-index")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
ReactDOM.createRoot(document.getElementById("footer-index")).render(
  <React.StrictMode>
    <Footer />
  </React.StrictMode>
);

