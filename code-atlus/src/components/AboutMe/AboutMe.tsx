import React, { useEffect } from 'react';
import './AboutMe.css';

function AboutMe() {
  // useEffect runs once after component mounts
  useEffect(() => { document.title = 'Obed Negrón - About Me'; }, []);
  
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