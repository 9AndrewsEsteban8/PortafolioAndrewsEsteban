
import './App.css';
import Contact_me from './Components/Contact_me';
import Footer from './Components/Footer';
import From from './Components/From';
import Header from './Components/Header';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Tecnology from './Components/Tecnology';





function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <section className='Container_cards'>
        <h1>Sobre mi</h1>
        <div className='containers_cardsred'>
        <Cards>
          <p>Soy un apasionado desarrollador web Frontend con experiencia en la creación de interfaces atractivas con responsivas.<br/> 
          He trabajado con tecnologías como React,Git y Github; centrándome en el desarrollo web. <br/> 
          Mi principal objetivo es convertir diseños creativos en código funcional. <br/> 
          Mi experiencia como Guardián me ha generado una experiencia de 4 años en habilidades como el compromiso y el trabajo en equipo.<br/> 
          De esta manera, logro proporcionar soluciones digitales de alta calidad en conjunto con colegas de diferentes áreas de especialización.</p>
        </Cards>
        <h1>Tecnologías manejadas</h1>
        <Tecnology/>
        </div>
        <hr className="line" />
        <h1>Proyectos realizados por mi</h1>
      </section>
      <Contact_me/>
      <From/>
      <Footer/>
    </div>
  );
}

export default App;
