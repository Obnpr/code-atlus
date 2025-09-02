import React from 'react';
import './Header.css';

function Header() {


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
    <img
      src="./page-elements/MenuBar.webp"
      className="sidebar-collapse-button"
      alt="Colapse Sidemenu button"
      title="Colapse Sidemenu" 
    />
  </div>  
  </aside>
);

}

export default Header;
