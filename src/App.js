import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetailContainer from './components/ItemDetailContainer';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';

function App() {

  return (
    <CartProvider>
      <BrowserRouter>
        <NavBar/>
        <Routes>
          <Route path='/item/:id' element={<ItemDetailContainer/>}/>
          <Route path='/' element={<ItemListContainer greeting={'Vestirlos bien, es vestirlos Child'}/>}/>
          <Route path='/category/:type' element={<ItemListContainer />}/>
          <Route path='/contacto' element={<ContactSection />}/>
          <Route path='/cart' element={<Cart />}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </CartProvider>
    );
}

export default App;
