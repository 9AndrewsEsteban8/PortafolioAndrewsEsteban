import './App.css';
import Contact_me from './Components/Contact_me';
import Footer from './Components/Footer';
import From from './Components/From';
import Header from './Components/Header';
import Home from './Components/Home';
import Cards from './Components/Cards';
import Tecnology from './Components/Tecnology';
import Projects from './Components/Projects';
import firstproject from '../src/images/Project_Sabuja.png'
import secondproject from '../src/images/Project_Pookemos.png'
import thirdproject from '../src/images/Project_Lading.png'





function App() {
  return (
    <div className="App">
      <Header/>
      <Home/>
      <section className='Container_cards'>
        
        <div className='containers_cardsred'>
          <div className='aboutme'>
            <h2>Sobre mi</h2>
            <Cards>         
              <p>Soy un apasionado desarrollador web Frontend con experiencia en la creación de interfaces atractivas con responsivas.<br/> 
              He trabajado con tecnologías como React,Git y Github; centrándome en el desarrollo web. <br/> 
              Mi principal objetivo es convertir diseños creativos en código funcional. <br/> 
              Mi experiencia como Guardián me ha generado una experiencia de 4 años en habilidades como el compromiso y el trabajo en equipo.<br/> 
              De esta manera, logro proporcionar soluciones digitales de alta calidad en conjunto con colegas de diferentes áreas de especialización.</p>
            </Cards>
          </div>
        <Tecnology/>
        </div>
        <hr className="line" />
        <div className='text_projects'>
          <h2>Proyectos realizados por mi</h2>
          <p>Haz click en la imagen para ver el proyecto</p>
        </div>
        <div className='repo'>
          <Projects
          link='https://sabujcha-web.vercel.app/' 
          imgSrc={firstproject}   
          imgAlt='foto_primerproyecto'  
          text= 'Tienda online'
          linkrepo='https://github.com/JorgeT0rr3s/Sabujcha-web.git'
          />
          <Projects
          link='https://pokemon-api-red.vercel.app/' 
          imgSrc={secondproject}   
          imgAlt='foto_segundoproyecto'
          text= 'Pokedex' 
          linkrepo='https://github.com/JorgeT0rr3s/Pokemon-api.git'   
          />
          <Projects
          link='https://genero-front-six.vercel.app/' 
          imgSrc={thirdproject}   
          imgAlt='foto_tercerproyecto' 
          text= 'Landing page'
          linkrepo='https://github.com/programateacademy/genero-front.git' 
          />
        </div>
      </section>
      <div className='container_contactfrom'>
        <Contact_me/>
        <From/>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
