import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

function Cart(){

  const { cart, deleteItem, clearCart} =  useContext(cartContext);

  return (
    <div className='container cart-container'>
      {
        cart.length ?
          <div>
              <div className='row'>
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
              </div>
              <div className='row align-items-end' style={{margin: "20px 0"}}>
                <div class="d-grid gap-2 d-md-flex justify-content-md-end">
                  <button type="button" className='btn btn-primary' onClick={ ()=> clearCart() }>Vaciar Carrito</button> 
                  <button type="button" className='btn btn-primary'><Link to={'/order'} style={{textDecoration: "none", color:"white"}} >Hacer Pedido</Link></button>
                </div>
              </div>
          </div>
          :
          <div>
            <div className='row'>
              <h1 className='text-center'>No hay productos en el carrito</h1>
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
