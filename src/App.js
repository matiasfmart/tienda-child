import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';

function App() {

  return (
    <BrowserRouter>
      <div className="nav">
        <NavBar/>
      </div>
     <Routes>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       <Route path='/' element={<ItemListContainer greeting={'Tienda'}/>}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
