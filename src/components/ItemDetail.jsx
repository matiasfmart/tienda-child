import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { cartContext } from '../context/CartProvider';

function ItemDetail({item}){

    const [btnViewCart, setBtnViewCart] = useState(false);
    const { addToCart } = useContext(cartContext);

    function onAdd(count){
        addToCart(item, count);
        setBtnViewCart(true);
    }          

    return(
        <>
            <div className='container'>
                <div className="card mb-3">
                    <div className='row g-0'>
                        <div className='col-md-6'>
                            <img className='img-fluid roundewd-start' src={item.urlPicture} alt="" />
                        </div>
                        <div className='col-md-6'>
                            <div className='card-body'>
                                <div className="container-description__detail">
                                    <p className='card-text'><small className='text-muted'>{item.id}</small></p>
                                    <h1 className='card-title'>{item.title}</h1>
                                    <p className='card-text'>{item.description}</p>
                                    <h2 className='card-title'>${item.price}</h2>
                                        { btnViewCart ? <Link to={'/cart'}><button className='btn btn-primary btn-lg'>Ver Productos</button></Link>
                                        : <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/> }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
  )
};

export default ItemDetail;
