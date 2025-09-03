import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';

function Sidebar() {
  return (
      <aside className="sidebar">
      <ul>
        <li className="sidebar-li">
          <Link to="/">
            <img 
              className="sidebar-image-buttons"
              src="./logo/osmiumbits-logo.jpg"
              alt="Picture-Logo of Osmium Bits"
              title="Go Home — Logo of Osmium Bits" 
            />
          </Link>
        </li>
        <li className="sidebar-li">
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
        <li className="sidebar-li">
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
        <li className="sidebar-li">
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
        <li className="sidebar-li">
          <Link to="/Portfolio">
          <a 
            href="/Portfolio" 
            target="_blank" 
            rel="noopener noreferrer"
            className="sidebar-buttons"
          >
          Portfolio
          </a>
          </Link>
        </li>
        <li className="sidebar-li">
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
      </ul>
    </aside>
  );
}


export default Sidebar;
