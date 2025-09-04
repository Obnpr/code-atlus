import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css';
import './SidebarMobile.css';

interface SidebarProps {
  isOpen: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen }) => {
const sidebarVisibility = `sidebar${!isOpen ? '-collapsed' : ''}`;
  

  return (
      <aside 
        className={sidebarVisibility} 
        data-status={sidebarVisibility}
      >
          <Link 
          to="/"
          className="sidebar-li"
          >
            <img 
              className="sidebar-image-buttons"
              src="./logo/osmiumbits-logo.jpg"
              alt="Picture-Logo of Osmium Bits"
              title="Go Home — Logo of Osmium Bits" 
            />
          </Link>
          <Link 
          to="/"
          className="sidebar-buttons"
          >
          Home
          </Link>
          <Link 
            to="/About-Me"
            className="sidebar-buttons"
          >
          About Me
          </Link>
          <Link to="/Portfolio-Collage"
            className="sidebar-buttons"
          >
          Portfolio Collage Ver.
          </Link>
          <Link to="/Portfolio"
            className="sidebar-buttons"
          >
          Portfolio
          </Link>
          <Link 
            to="/Past-Projects"
            className="sidebar-buttons"
          >
          Contact Me
          </Link>
          <Link 
            to="/Osmium-Bits"
            className="sidebar-buttons"
          >
          Osmium Bits
          </Link>
    </aside>
  );
}


export default Sidebar;
