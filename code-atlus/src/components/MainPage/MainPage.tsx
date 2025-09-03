import React from 'react';
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
import '../Mobile/mobile.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="components-structured">
          <Sidebar />
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
