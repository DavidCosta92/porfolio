import './App.scss';
import Navbar from './Navbar/Navbar';
import BodyContainer from './BodyContainer/BodyContainer';
import './ihover.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import PaginaRedireccion from './pagDeRedireccionamiento/PaginaRedireccion';



function App() {
  AOS.init();
  return (
    <div className="App">
      <PaginaRedireccion/>
      
      {/*<Navbar/>
      <BodyContainer/> */}
    </div>
  );
}

export default App;
