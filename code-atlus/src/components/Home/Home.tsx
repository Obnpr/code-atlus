import { Link } from 'react-router-dom';
import React, { useEffect } from 'react';
import './Home.css';

function HomePage() {
  // useEffect runs once after component mounts - This is perfect!
  useEffect(() => {
    document.title = 'Home — Obed Negrón';
  }, []);

  return (
    <main className="main-content-box">
      <div className="main-content">
        <h1>Hey, I'm Obed Negrón from the beautiful island of Puerto Rico!</h1>
        <div className="titlesubdiv">
          <div className="titlesubtext">
            <p>I'm an undergraduate student that likes software development and with experience in various other fields from computer hardware to video-game Development.</p>
          </div>
          <div className="titlesubtext">
            <img 
              className="titlesubimage"
              src="/picture/profile-icon.jpg"
              alt="A picture of Obed Negron"
            />
          </div>
        </div>  
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

        <hr></hr>
        
        <h1>Current Projects</h1>
        <div>
          <h3>CienPi</h3>
          <p>Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!</p>
          <p>Release date: N/A - Platform: Steam</p>
        </div>
      </div>
    </main>
  );
}

export default HomePage;