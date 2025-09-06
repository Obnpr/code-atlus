import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Home.css';
import './HomeMobile.css';

function HomePage() {
  // useEffect runs once after component mounts
  useEffect(() => { document.title = 'Obed Negrón - Home'; }, []);

  return (
    <main className="main-content-box">
      <article className="main-content">
        <h1>Hey, I'm Obed Negrón from the beautiful island of Puerto Rico!</h1>
        <div className="titlesubdiv">
            <p className="titlesubtext">Undergraduate student with a focus on software and front-end development. Experienced in computer hardware, video game development, and proficient in Linux systems, particularly Debian-based distributions.</p>
            <figure>
            <img 
              className="titlesubimage"
              src="/picture/profile-icon.jpg"
              alt="A picture of Obed Negron"
            />
            </figure>
        </div> 
      </article>
      <div className="mainpage-buttons-box">
        <ul>
          <li>
            <a 
              href="/pdf/Resume-ObedNegron.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="mainpage-buttons"
            >
              Resume
            </a>
            <Link to="/About-Me" className="mainpage-buttons">
              About Me
            </Link>
          </li>
        </ul>
      </div>
        <hr></hr>
        
        <h2>Current Projects</h2>
        <div>
          <h3>CienPi</h3>
          <p>Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!</p>
          <p>Release date: N/A - Platform: Steam</p>
        </div>
      </main>
  );
}

export default HomePage;