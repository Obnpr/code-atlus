import React, { useState } from 'react';
import './Header.css';

interface HeaderProps {
  onToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onToggle }) => {

  return (
    <aside className="header-list">
    <div>
      <header>
        <img 
          src="./logo/logo.png"
          alt="A logo with the name website creator, 'Obed Negron'"
          className="header-obedn-logo"
        />
      </header>
      <button 
        onClick={onToggle} 
        className="sidebar-collapse-button"
      >
      <img
        src="./page-elements/MenuBar.webp"
        alt="Colapse Sidemenu button"
        title="Colapse Sidemenu" 
      />
      </button>
    </div>  
    </aside>
    );
}

export default Header;
