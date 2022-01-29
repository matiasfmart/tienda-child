import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ContactSection from './components/ContactSection';

function App() {

  return (
    <BrowserRouter>
        <NavBar/>
     <Routes>
       <Route path='/item/:id' element={<ItemDetailContainer/>}/>
       <Route path='/' element={<ItemListContainer greeting={'Tienda'}/>}/>
       <Route path='/category/:type' element={<ItemListContainer />}/>
       <Route path='/contacto' element={<ContactSection />}/>
      </Routes>
    </BrowserRouter>
    );
}

export default App;
