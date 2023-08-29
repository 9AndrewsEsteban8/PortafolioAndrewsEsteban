import './App.css';
import Contact_me from './Components/Contact_me';
// import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './Components/Footer';
import Header from './Components/Header';
import Home from './Components/Home';
import Perfil from './Components/Perfil';
import Tecnology from './Components/Tecnology';


function App() {
  const components = [];
  for (let i = 1; i <= 3; i++) {
    components.push(<Tecnology key={i} text={`Componente ${i}`} />);
  }
  return (
    <div className="App">
      <Header/>
      <Home/>
      <Perfil/>
      {components}
      <Contact_me/>
      {/* <Footer/> */}
    </div>
  );
}

export default App;
