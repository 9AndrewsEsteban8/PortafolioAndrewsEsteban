import React, { useState, useEffect } from 'react';
import foto from '../images/Foto_Inicio.jpeg';
// import iconPage from '../images/Logo.png';

const Home = () => {
  const jobs = ['Desarollador FrontEnd', 'Mecánico', 'Electrónico'];
  const [currentJobIndex, setCurrentJobIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentJobIndex((prevIndex) => (prevIndex + 1) % jobs.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [jobs.length]);

  return (
    <div className="title-container">
      <div className='text-home'>
        <h1 className="myname">Andrews Castillo, Andres Esteban</h1>
        <span className="jobs">{jobs[currentJobIndex]}</span>
      </div>
      <img className="photo_home" src={foto} alt="foto.mia" />
    </div>
  );
};

export default Home;
