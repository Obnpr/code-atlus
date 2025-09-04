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
import './MainPage.css';
import './MainPageMobile.css';

function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // Sidebar hide func
  const [isVisible, setIsVisible] = useState(false); // Scroll-Up func

// Sidebar hide func
  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

// Scroll-Up func
  const toggleVisibility = () => {
  if (window.pageYOffset > 1200) {
    setIsVisible(true);
  } else {
    setIsVisible(false);
  }
};
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);
  const scrollToTop = () => {
    window.scrollTo({
      top: 80,
      behavior: 'smooth' // for a smooth scrolling experience
    });
  };

  
  return (
    <Router>
        <div className="static-scrollup">
          {isVisible && (
          <button onClick={scrollToTop} className="scroll-button">
          <img
            className="static-scrollup"
            src="/page-elements/scroll-up.webp"
            alt="Icon to Scroll up"
          >
          </img>
          </button>
          )}
        </div>
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
