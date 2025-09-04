import React, { useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
  useEffect(() => { document.title = 'About Me — Obed Negrón';}, []);
  //
  
  return (
    <>
      <main className="main-content-box">
        <div className="main-content">
          <h1>About Me</h1>
            <img 
              className="titlesubimage"
              src="/picture/profile-icon.jpg"
              alt="A picture of Obed Negron"
            />
          <div className="titlesubdiv">
          <p>I am... Lorem Ipsum...</p>
          </div>
        </div>
      </main>
    </>
  );
}

export default AboutMe;