import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//
import Header from '../Header/Header';
import Sidebar from '../Sidebar/Sidebar';
import HomePage from '../Home/Home';
import Footer from '../Footer/Footer';
//
import AboutMe from '../AboutMe/AboutMe';
import Portfolio from '../Portfolio/Portfolio';
import PortfolioCollage from '../PortfolioCollage/PortfolioCollage';
//
import ScrollToTop from '../ScrollToTop/ScrollToTop';
//
import './MainPage.css';
import './MainPageMobile.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar hide func


// Sidebar hide func
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };
  
  return (
     
    <Router>
      {/*
      {isUserDeepScrolling && (
      <button onClick={scrollToTop}>
        <img
        className="static-scrollup"
        src="/page-elements/scroll-up.webp"
        alt="Icon to Scroll up"
        >
        </img>
      </button>
      )}
      */}
      <div className="app">
        <Header onToggle={handleToggleSidebar} />
        <div className="components-structured">
          <Sidebar isOpen={isSidebarOpen} />
          <main className="main-content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/About-Me" element={<AboutMe />} />
              <Route path="/Portfolio-Collage" element={<PortfolioCollage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
