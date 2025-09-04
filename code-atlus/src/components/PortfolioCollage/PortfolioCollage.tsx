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
          <h2>Creation Date: 30/8/2025</h2>
          </div>
          <h2>Last Modified: 4/9/2025</h2>
          <a><em><p>date/month/year</p></em></a>
          </li>
          <li className="portfoliocollage-tableofcontent">
          <h2 >Table of Content</h2>
          <a href="#part-frontpage" className="portfoliocollage-tableofcontent-buttons">Front Page</a>
          <hr></hr>
          <h4>Introduction</h4>
          <a href="#part-portfolio-objective" className="portfoliocollage-tableofcontent-buttons">Objetive of Portfolio</a>
          <a href="#part-student-information" className="portfoliocollage-tableofcontent-buttons">Student Information</a>
          <hr></hr>
          <h4>Works</h4>
          <a href="#part-internship-projects" className="portfoliocollage-tableofcontent-buttons">Internship projects</a>
          <hr></hr>
          <h4>Projects</h4>
          <a href="#part-favorite-project" className="portfoliocollage-tableofcontent-buttons">Favorite projects</a>
          <a href="#part-c++-project" className="portfoliocollage-tableofcontent-buttons">C++ projects</a>
          <a href="#part-htmlcss-project" className="portfoliocollage-tableofcontent-buttons">HTML+CSS projects</a>
          <a href="#part-other-project" className="portfoliocollage-tableofcontent-buttons">Other projects</a>
          <hr></hr>
          <h4>Performance Feedback</h4>
          <a href="#part-frontpage" className="portfoliocollage-tableofcontent-buttons">Intership Feedback</a>
          <hr></hr>
          <h4>Conclusion</h4>
          <a href="#part-conclusion" className="portfoliocollage-tableofcontent-buttons">Recap</a>
          <a href="#part-used-references" className="portfoliocollage-tableofcontent-buttons">References Used</a>
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
            <h2 id="part-projects">Projects</h2>
            <h3 id="part-favorite-project">Favorite projects</h3>
          <ul className="portfoliocollage-article-container">
            <div className="portfoliocollage-article-box">
              <img
                src="./placeholder/game-image.webp"
                alt="Placeholder Game Image"
              />
                <h3>CienPi</h3>
                <p>Name's a wordplay between the Spanish word 'ciempiés' (centipedes) and Pi (π). Still in Early development, It's going to be a 2.5D isometric shooter game, fighting against crawling and flying insects, and centipedes.</p>
                <p>Currently in-develop, utilizing the <a href="https://godotengine.org/" target="_blank" rel="noopener noreferrer" className="portfoliocollage-paragraph-link">Godot Engine</a>, with it's own language <a href="https://gdscript.com/" target="_blank" rel="noopener noreferrer"  className="portfoliocollage-paragraph-link">GDScript</a>.</p>
                <div className="portfoliocollage-article-button-alignment">
                  <a
                    href="https://github.com/Obnpr/CienPi" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
            </div>
            <div className="portfoliocollage-article-box">
              <img
                src="./placeholder/game-image.webp"
                alt="Placeholder image of a game stick"
              />
                <ul className="portfoliocollage-article-titlelogo">
                  <img
                    src="./logo/fuelzone-logo.webp"
                    alt="Logo of FuelZone"
                  />
                  <h3>Fuelzone</h3>
                </ul>
                <p>It's a online blogging website, with admin generated content such as tutorials for specific games. It also had user generated comments and like systems.</p>
                <p>Utilizes NET.CORE, which uses C# and .NET as it's framework, for the database utilizes <a href="https://www.microsoft.com/en-us/sql-server/sql-server-downloads" target="_blank" rel="noopener noreferrer" className="portfoliocollage-paragraph-link">Microsoft SQL Server</a>.</p>
                <div className="portfoliocollage-article-button-alignment">
                  <a
                    href="https://github.com/Obnpr/Fuelzone-Blogs" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                </div>
            </div>
          </ul>

          <h3 id="part-c++-project">C++ project</h3>
          <ul className="portfoliocollage-article-container">
            <div className="portfoliocollage-article-box">
              <img
                src="./placeholder/game-image.webp"
                alt="Placeholder Game Image"
              />
                <h3>CienPi</h3>
                <p>Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!</p>
                <p>Platform: Steam and Itch.io</p>
                <div className="portfoliocollage-article-button-alignment">
                  <a
                    id="is-disabled"
                  >
                    Github
                  </a>
                </div>
            </div>
            <div className="portfoliocollage-article-box">
              <img
                src="./placeholder/game-image.webp"
                alt="Placeholder image of a game stick"
              />
                <h3>N/A</h3>
                <p>N/A</p>
                <p>Platform: N/A</p>
                <div className="portfoliocollage-article-button-alignment">
                  <a
                    id="is-disabled"
                  >
                    Github
                  </a>
                </div>
            </div>
          </ul>

            <h3 id="part-htmlcss-project">HTML+CSS project</h3>
          <ul className="portfoliocollage-article-container">
            <div className="portfoliocollage-article-box">
              <img
                src="./placeholder/game-image.webp"
                alt="Placeholder Game Image"
              />
                <h3>Checkm8</h3>
                <p>Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!</p>
                <p>Platform: Steam and Itch.io</p>
                <ul className="portfoliocollage-article-button-alignment">
                  <a
                    href="https://github.com/Obnpr/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    Github
                  </a>
                  <a
                    href="https://obnpr.github.io/code-applcheckmate/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                  >
                    View
                  </a>
                </ul>
            </div>
          </ul>
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