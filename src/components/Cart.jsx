import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

function Cart(){

  const { cart, deleteItem, clearCart} =  useContext(cartContext);

  return (
    <div className='container` container-cart`'>
      <ol className="list-group list-group-numbered">
        {
          cart.map((e) => (
            <li className="list-group-item d-flex justify-content-between align-items-start">
              <div className="ms-2 me-auto">
                <div className="fw-bold">{e.item.title}</div>
                ${e.item.price}
              </div>
              <span className="badge bg-primary rounded-pill">{e.count}</span>
            </li>
          ))
        }
      </ol>
      {
        cart.length ? 
        <div class="d-grid gap-2 d-md-flex justify-content-md-end">
          <button className='btn btn-primary me-md-2' onClick={ ()=> clearCart() }>Vaciar Carrito</button> 
          <Link to={'/order'}><button className='btn btn-primary'>Hacer Pedido</button></Link>
        </div>
        :
        <div className='container'>
          <div className='row'>
            <h1>No hay productos en el carrito</h1>
          </div>
          <div className='row'>
            <Link to={`/`} ><button className='btn btn-primary'>A Comprar!</button></Link>
          </div>
        </div>
      }
    </div>
  )
};

export default Cart;
