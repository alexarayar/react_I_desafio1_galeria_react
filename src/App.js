import Header from './components/Header';
import Footer from './components/Footer';
import Cards from './components/Card';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header titulo="Saint Seiya - cabaellos de Bronce" />
 
      <Cards src="/imgs/01.jpg" title="Seiya de Pegasus" descripcion="Caballero de Bronce"/>
      <Cards src="/imgs/02.jpg" title="Shiryū de Dragon" descripcion="Caballero de Bronce" />
      <Cards src="/imgs/03.jpg" title="Hyōga de Cygnus" descripcion="Caballero de Bronce" />
      <Cards src="/imgs/04.jpg" title="Shun de Andromeda" descripcion="Caballero de Bronce" />
      <Cards src="/imgs/05.png" title="Ikki de Phoenix" descripcion="Caballero de Bronce" />
      <Footer />
    </div>
  );
}

export default App;