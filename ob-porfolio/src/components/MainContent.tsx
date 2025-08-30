import React from 'react';

const HomePage: React.FC = () => (
  <main className="main-content">
    <section className="square">
      <h1>Hey, I'm Obed Negrón from the beautiful island of Puerto Rico! Here you'll find various information about me.</h1>
      <ul>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>Lorem Ipsum</li>
        <li>
          <a 
            href="/public/pdf/Resume-ObedNegron.pdf" 
            target="_blank" 
            rel="noopener noreferrer"
            className="button-link"
          >
            Resume
          </a>
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
