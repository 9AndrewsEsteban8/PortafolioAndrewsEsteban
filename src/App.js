import './App.css';
import Contact_me from './Components/Contact_me';
import Footer from './Components/Footer';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Navbar from './Components/Navbar'
import Header from './Components/Header';
import Home from './Components/Home';
import Perfil from './Components/Perfil';
import Projects from './Components/Projects';



function App() {
  const perfiles = [
    { nombre: "Perfil 1",  },
    { nombre: "Perfil 2", }
  ];

  const components = [];
  for (let i = 1; i <= 3; i++) {
    components.push(<Projects key={i} text={`Componente ${i}`} />);
  }
  return (
    <div className="App">
      <Header/>
      <Home/>
      {/* <Navbar/> */}
      <section className='Container_cards'>
        <div className='containers_cardsred'>
        {perfiles.map((perfil,index)=>(
          <Perfil key={index}/>
        ))}
        </div>
        <hr className="line" />

        <div className='repo'>
      {components}
      </div>
      </section>
      <Contact_me/>
      <Footer/>
    </div>
  );
}

export default App;
