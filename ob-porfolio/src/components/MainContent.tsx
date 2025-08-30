import React from 'react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => (
  <main className="main-content">
    <section className="square">
      <h1>Hey, I'm Obed Negrón from the beautiful island of Puerto Rico!</h1>
        <div className="titlesubdiv">
          <div className="titlesubtext">
          <a >I'm a undergraduate student that likes software development and with experience in various other field from computer hardware to video-game Development.</a>
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
          <Link to="/About-Me">
          <a 
            href="#" 
            target="_blank" 
            rel="noopener noreferrer"
            className="mainpage-buttons"
          >
          About Me
          </a>
          </Link>
        </li>
      </ul>
      <h2>Current Projects</h2>
      <section>
        <h2>CienPi</h2>
        <a>Early development. It's going to be a 2.5D isometric shooter game, fighting againts crawling insects, and centipedes!</a>
        <br/><a>Release date: N/A - Platform: Steam</a>
      </section>
    </section>
  </main>
);

export default HomePage;
