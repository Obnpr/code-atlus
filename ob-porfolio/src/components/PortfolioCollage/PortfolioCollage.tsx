import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCollage.css';

function PorfolioCollage() {
  //  useEffect runs once after component mounts
  useEffect(() => { document.title = 'Porfolio Collage — Obed Negrón';}, []);
  return (
    <>
    <main className="portfoliocollage-content">
      <div className="portfoliocollage-div">
        <h1 id="part-frontpage">Portfolio for Collage Class COMP 4910</h1>
        <hr></hr>
        <div className="titlesubdiv">
        <ul>
          <li>
          <h2>Obed Negrón Bodón</h2>
          <h2>P00589029</h2>
          <h2>COMP 4910 PRÁCTICA Y ÉTICA PROFESIONAL</h2>
          <h2>Raquel Lugo Vecchini</h2>
          </li>
          <li>
          <br></br>
          <div className="portfoliocollage-dateformat">
          <h2>Date of Creation: 30/8/2025</h2><a><em>date/month/year</em></a>
          </div>
          <h2>Date of Last Modify: 30/8/25</h2>
          </li>
          <br></br><hr></hr><br></br>
          <li>
          <h2>Table of Content</h2>
          <a href="#part-frontpage" className="portfoliocollage-buttons">Front Page</a>
          <h4>Introduction</h4>
          <a href="#part-frontpage" className="portfoliocollage-buttons"> Student Information</a>
          <h4>Works</h4>
          <a href="#part-frontpage" className="portfoliocollage-buttons">Past projects</a>
          </li>
        <br></br><hr></hr><br></br>
          <ul>
                    <li>
          <h2>Student Information</h2>
          <h3>Obed Negrón Bodón</h3>
          <p>I’ve been an undergraduate Computer Science student for almost 5 (five) years now, and throughout that time my passion for technology has only deepened. Currently live in Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years. Over the years, I’ve explored different areas of computer science, from text to speech to software development, with the intent of creating not-so-useful applications for my daily use. But recently, my current interests are game development and web design, which led me to experimenting with GDScript, used for creating small games and React to build modern look, and responsive websites. These experiences have shaped my academic formation, blending creativity with technical skills, and motivating me to keep on pushing throughout the years.</p>
          </li>
          </ul>
          <div>
              <h2>Student Information</h2>
              <h3>Obed Negrón Bodón</h3>
          </div>
                    <div>
              <h2>Student Information</h2>
              <h3>Obed Negrón Bodón</h3>
          </div>
        </ul>  
        </div>
      </div>
    </main>
    </>
  );
}

export default PorfolioCollage;