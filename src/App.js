import './App.css';
import Base from './app/components/menu/Menu';
import Listado from './app/components/curso/Listado';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Base />
      </header>
      <Listado />
    </div>
  );
}

export default App;
