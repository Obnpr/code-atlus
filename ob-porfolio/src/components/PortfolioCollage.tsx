import React, { useEffect } from 'react';

function PorfolioCollage() {
  //  useEffect runs once after component mounts
  useEffect(() => { document.title = 'Porfolio Collage — Obed Negrón';}, []);
  return (
    <>
    <main className="main-content">
      <div className="square">
        <h1>Portfolio for Collage Class COMP 4910</h1>
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
          <div className="PortfolioCollageDateFornat">
          <h2>Date of Creation: 30/8/2025</h2><a><em>date/month/year</em></a>
          </div>
          <h2>Date of Last Modify: 30/8/25</h2>
          </li>
        </ul>  
        </div>
      </div>
    </main>
    </>
  );
}

export default PorfolioCollage;