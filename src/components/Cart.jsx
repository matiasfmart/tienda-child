import React, { useContext } from 'react';
import { cartContext } from '../context/CartProvider';

function Cart(){

  const { cart } =  useContext(cartContext);

  return (
    <>
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
            </div>
          ))
        }
    </>
  )
};

export default Cart;
