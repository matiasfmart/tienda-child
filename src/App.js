import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';

function App() {

  return (
    <>
      <div className="nav">
        <NavBar/>
      </div>
      <div>
        <ItemListContainer greeting={'Tienda Child'}/>
      </div>
    </>
    );

  }

export default App;
