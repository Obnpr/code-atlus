import React, { useEffect } from 'react';

function AboutMe() {
    // This useEffect hook runs once after the component mounts
  useEffect(() => { document.title = 'About Me — Obed Negrón';}, []);
  //
  return (
    <>
    <main className="main-content">
      <div className="square">
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