import logo from './logo.svg';
import './App.css';
import Titulo from './Titulo';
import {Producto} from './Producto';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <Producto nombre="Teclado" precio="15.000" stock="10" descripcion="jkhdafljkhd"/>
          <Producto nombre="Mouse" precio="5.000" stock="2" descripcion="asdasdas"/>
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
