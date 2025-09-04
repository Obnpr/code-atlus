import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './PortfolioCollage.css';
import './PortfolioCollageMobile.css';

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
          <h2>Date of Creation: 30/8/2025</h2>
          </div>
          <h2>Date of Last Modify: 3/9/2025</h2>
          <a><em><p>date/month/year</p></em></a>
          </li>
          <li className="portfoliocollage-tableofcontent">
          <h2 >Table of Content</h2>
          <a href="#part-frontpage" className="portfoliocollage-buttons">Front Page</a>
          <hr></hr>
          <h4>Introduction</h4>
          <a href="#part-portfolio-objective" className="portfoliocollage-buttons">Objetive of Portfolio</a>
          <a href="#part-student-information" className="portfoliocollage-buttons">Student Information</a>
          <hr></hr>
          <h4>Works</h4>
          <a href="#part-internship-projects" className="portfoliocollage-buttons">Internship projects</a>
          <a href="#part-past-projects" className="portfoliocollage-buttons">Past projects</a>
          <ol>
            <a href="#part-favorite-project" className="portfoliocollage-buttons">Favorite project</a>
            <a href="#part-c++-project" className="portfoliocollage-buttons">C++ projects</a>
            <a href="#part-htmlcss-project" className="portfoliocollage-buttons">HTML+CSS projects</a>
            <a href="#part-other-project" className="portfoliocollage-buttons">Other projects</a>
          </ol>
          <hr></hr>
          <h4>Performance Feedback</h4>
          <a href="#part-frontpage" className="portfoliocollage-buttons">Intership Feedback</a>
          <hr></hr>
          <h4>Conclusion</h4>
          <a href="#part-conclusion" className="portfoliocollage-buttons">Recap</a>
          <a href="#part-used-references" className="portfoliocollage-buttons">References Used</a>
          </li>
          <br></br>
          <ul>
              <h2 id="part-portfolio-objective">Portfolio Objectives</h2>
              <p>The sole objective of this portfolio is to showcase my personal knowledge, skills, and projects I’ve developed throughout both my computer science program and now in my professional career as a starting intern. Both showing and demostrating my ability to apply theoretical concepts to practical problems, I think I've created strong roots that has helped on both in past personal projects and now in my current intership.
              </p>
              <p>Ultimately, this portfolio serves as both a reflection of my learning journey and it's fruition in my  current professional career.
              </p>
            <hr></hr>
            <h2 id="part-student-information">Student Information</h2>
            <h3>Obed Negrón Bodón</h3>
            <p>I’ve been an undergraduate Computer Science student for 5 (five) years now, and throughout that time my passion for technology has only deepened. Currently living and working in Juana Diaz, Puerto Rico, I got my weak and old 2011 HP work desktop, it wasn’t powerful, but it slowly introduced me into a whole world later in my years. Over the years, I’ve explored different areas of computer science, from simple text to speech programs to website development, with the intent of creating not-so-useful applications for my use. Recently, my current interests have been in game development and web design, which led me to experimenting with GDScript, used for creating small games and React to build modern look, and responsive websites. These experiences have shaped my academic formation, blending creativity with technical skills, and motivating me to keep on pushing throughout the years.</p>
          </ul>
          <hr></hr>
          <h2 id="part-internship-projects">Internship Projects</h2>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum</p>
          <hr></hr>
            <h2 id="part-past-projects">Past Projects</h2>
            <h3 id="part-favorite-project">Personal favorite project</h3>
            <p>Lorem Ipsum</p>
            <h3 id="part-c++-project">C++ project</h3>
            <p>Lorem Ipsum</p>
            <h3 id="part-htmlcss-project">HTML+CSS project</h3>
            <p>Lorem Ipsum</p>
            <h3 id="part-other-project">Other project</h3>
            <p>Lorem Ipsum</p>
          <hr></hr>
            <h2 id="part-interview-feedback">Interview Feedback</h2>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum</p>
          <hr></hr>
            <h2 id="part-conclusion">Conclusion</h2>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum</p>
          <hr></hr>
            <h2 id="part-personal-links">Personal Links</h2>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum</p>
          <hr></hr>
            <h2 id="part-used-references">Used References</h2>
            <h3>Lorem Ipsum</h3>
            <p>Lorem Ipsum</p>
        </ul>  
        </div>
      </div>
    </main>
    </>
  );
}

export default PorfolioCollage;