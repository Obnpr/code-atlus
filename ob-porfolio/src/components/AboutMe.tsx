import React, { useEffect } from 'react';

function AboutMe() {
    // This useEffect hook runs once after the component mounts
  useEffect(() => {
    document.title = 'About Me — Obed Negrón';
  }, []);

  return (
    <div>
      <h2>Home</h2>
      <p>Welcome to the homepage!</p>
    </div>
  );
}

export default AboutMe;