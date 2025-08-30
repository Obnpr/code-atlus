import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
//
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import HomePage from './components/MainContent';
import Footer from './components/Footer';
//
import AboutMe from './components/AboutMe';
import Portfolio from './components/Portfolio';
import PastProjectsPage from './components/PastProjects';
import PortfolioCollage from './components/PortfolioCollage';
import AppTestPage from './Apptest';
//
import './App.css';

const App: React.FC = () => {
  return (
    <Router>
      <div className="app">
        <Header />
        <div className="content">
          <Sidebar />
          <main className="main-content-area">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/Past-Projects" element={<PastProjectsPage />} />
              <Route path="/Portfolio" element={<Portfolio />} />
              <Route path="/About-Me" element={<AboutMe />} />
              <Route path="/Portfolio-Collage" element={<PortfolioCollage />} />
              <Route path="/AppTest" element={<AppTestPage />} />
            </Routes>
          </main>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
