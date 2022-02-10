import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';
import { Link } from 'react-router-dom';

function Cart(){

  const { cart, deleteItem, clearCart} =  useContext(cartContext);

  return (
    <div className='container'>
          {
            cart.map((e) => (
              <div className='row'>         
                <div className='card mb-3'>
                  <div className='row g-0'>
                    <div className='col-md-2'>
                      <img className='img-fluid rounded-start' src={e.item.urlPicture} alt="" />
                    </div>
                    <div className='col-md-6'>
                      <h1 className='card-title'>{e.item.title}</h1>
                      <h3 className='card-text'>{e.item.description}</h3>
                    </div>
                    <div className='col-md-2'>
                        <h1 className='card-title'>${e.item.price}</h1>
                        <h1 className='card-title'>{e.count}</h1>
                    </div>
                    <div className='col-md-2'>
                      <button onClick={ ()=> deleteItem(e.item.id) } className='btn btn-primary'>Sacar del carrito</button>
                    </div>
                  </div>
                </div>
              </div>
            ))
          }
          {
            cart.length ? <button className='btn btn-primary' onClick={ ()=> clearCart() }>Vaciar Carrito</button> 
            : <div className='container'>
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
