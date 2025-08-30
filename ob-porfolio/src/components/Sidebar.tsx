import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar: React.FC = () => (
    <aside className="sidebar">
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/About-Me">About Me</Link></li>
        <li><Link to="/Porfolio">Porfolio</Link></li>
        <li><Link to="/Past-Projects">Past Projects</Link></li>
        <li className="sidebar-seperator-before"><Link to="/Contact">Contact Me</Link></li>
        <li className="sidebar-seperator-after"><Link to="/Osmium-Bits">Osmium Bits</Link></li>
        <li><Link to="/AppTest">Test Page</Link></li>
      </ul>
    </aside>
);

export default Sidebar;
