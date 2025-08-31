import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
    <aside className="sidebar">
      <ul>
        <li>
          <Link to="/">
          <a 
            href="/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Home
          </a>
          </Link>
        </li>
        <li>
          <Link to="/About-Me">
          <a 
            href="/About-Me" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          About Me
          </a>
          </Link>
        </li>
        <li>
          <Link to="/Portfolio-Collage">
          <a 
            href="/Portfolio-Collage" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Portfolio Collage
          </a>
          </Link>
        </li>
        <li>
          <Link to="/Porfolio">
          <a 
            href="/Porfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Porfolio
          </a>
          </Link>
        </li>
        <li>
          <Link to="/Past-Projects">
          <a 
            href="/Past-Projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Past Projects
          </a>
          </Link>
        </li>
        <li className="sidebar-seperator-before">
          <Link to="/Past-Projects">
          <a 
            href="/Past-Projects" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Contact Me
          </a>
          </Link>
        </li>
        <li className="sidebar-seperator-after">
          <Link to="/Osmium-Bits">
          <a 
            href="/Osmium-Bits" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Osmium Bits
          </a>
          </Link>
        </li>
                <li>
          <Link to="/AppTest">
          <a 
            href="/App-Test" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          App Test
          </a>
          </Link>
        </li>
      </ul>
    </aside>
);

export default Sidebar;
