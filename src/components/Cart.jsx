import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

function Cart(){

  const { cart, deleteItem, clearCart} =  useContext(cartContext);

  return (
    <div className='container-cart'>
        {
          cart.map((e) => (
            <div className='container-itemCart'>
              <div className='container-itemCart__img'>
                <img src={e.item.urlPicture} alt="" />
              </div>
              <div className='container-itemCart__title'>
                <h1>{e.item.title}</h1>
                <h3>{e.item.description}</h3>
              </div>
              <div className='container-itemCart__count'>
                <h1>{e.count}</h1>
              </div>
              <div className='container-itemCart__price'>
                <h1>${e.item.price}</h1>
              </div>
              <button onClick={ ()=> deleteItem(e.item.id) }>Sacar del carrito</button>
            </div>
          ))
        }

        <button onClick={ ()=> clearCart() }>Vaciar Carrito</button>
    </div>
  )
};

export default Cart;
