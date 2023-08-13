import React, { useState, useEffect } from 'react';
import foto from '../images/Foto_Inicio.jpeg';
import iconPage from '../images/Logo.png';

const Home = () => {
    const jobs = ['Programador 1', 'Mecanico', 'Electronico'];
    const [currentJobIndex, setCurrentJobIndex] = useState(0);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentJobIndex((prevIndex) =>
          (prevIndex + 1) % jobs.length
        );
      }, 1000);
  
      return () => clearInterval(interval);
    }, [jobs.length]);
  
    return (
      <div className="title-container">
        <img className="photo_home" src={foto} alt="foto.mia" />
        <h1 className='myname'>Andrews Castillo, Andres Esteban</h1>
        <span className="jobs">{jobs[currentJobIndex]}</span>
        <img className="image_icon" src={iconPage} alt="Icono_de_pagina" />
      </div>
    );
  };
  
  export default Home;