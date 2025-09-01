import React from 'react';
import './Portfolio.css';
const link = document.getElementById('is-disabled'); 

const Portfolio: React.FC = () => {


function toggleLinkState() {
  if (isEnabled) {
    // --- DISABLE THE LINK ---
    link.id = 'is-disabled'; // Change the ID to apply the CSS style
    link.removeAttribute('href'); 
    link.setAttribute('aria-disabled', 'true');
    link.setAttribute('tabindex', '-1');
    isEnabled = false;
    console.log("Link disabled. Current ID:", link.id);
  } else {
    // --- ENABLE THE LINK ---
    link.id = originalId; // Change the ID back to the original
    link.setAttribute('href', originalHref);
    link.removeAttribute('aria-disabled');
    link.removeAttribute('tabindex');
    isEnabled = true;
    console.log("Link enabled. Current ID:", link.id);
  }
}

  return (
    <>
      <main className="main-content-box">
        <div className="main-content">
          <h1>Portfolio</h1>
          <h2 className="title-before-content">Current Projects</h2>
          <ul className="portfolio-article-container">
            <div className="portfolio-article-box">
              <img
                src="/placeholder/game-image.webp"
                alt="A picture of Obed Negron"
              />
                <h3>CienPi</h3>
                <p>Early development. It's going to be a 2.5D isometric shooter game, fighting against crawling insects, and centipedes!</p>
                <p>Platform: Steam and Itch.io</p>
                <div className="portfolio-article-button-alignment">
                  <a
                    id="is-disabled"
                  >
                    Github
                  </a>
                  <a
                    id="is-disabled"
                  >
                    View More
                  </a>
                </div>
            </div>
            <div className="portfolio-article-box">
              <img
                src="/placeholder/game-image.webp"
                alt="Placeholder image of a game stick"
              />
                <h3>N/A</h3>
                <p>N/A</p>
                <p>Platform: N/A</p>
                <div className="portfolio-article-button-alignment">
                  <a
                    id="is-disabled"
                  >
                    Github
                  </a>
                  <a
                    id="is-disabled"
                  >
                    View More
                  </a>
                </div>
            </div>
          </ul>
          <h2 className="title-before-content">Past Projects</h2>
          <ul className="portfolio-article-container">
            <div className="portfolio-article-box">
              <img
                src="/placeholder/game-image.webp"
                alt="Placeholder image of a game stick"
              />
              <img
                className="portfolio-article-box-logo"
                src="/logo/fuelzone-logo.webp"
                alt="Logo of Fuelzone"
              />
                <h3>FuelZone</h3>
                <p>Is a Blogging website with interactive user like and comenting system. Build from .NET w/ C#, HTML, CSS and Javascript</p>
                <p>Not hosted</p>
              <div className="portfolio-article-button-alignment">
                <a
                  href="https://github.com/Obnpr/Fuelzone-Blogs" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  Github
                </a>
                <a
                  id="is-disabled"
                >
                  View More
                </a>
              </div>
            </div>
            <div className="portfolio-article-box">
              <img
                src="/placeholder/game-image.webp"
                alt="A picture of Obed Negron"
              />
                <h3>N/A</h3>
                <p>N/A</p>
                <p>Platform: N/A</p>
                <div className="portfolio-article-button-alignment">
                  <a
                    id="is-disabled"
                  >
                    Github
                  </a>
                  <a
                    id="is-disabled"
                  >
                    View More
                  </a>
                </div>
            </div>
          </ul>
        </div>
      </main>
    </>
  );
};

export default Portfolio;
