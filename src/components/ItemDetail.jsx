import React, { useContext } from 'react';
import { useState } from 'react/cjs/react.development';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';
import { cartContext } from '../context/CartProvider';

function ItemDetail({item}){

    const [quantity, setQuantity] = useState();
    const [btnViewCart, setBtnViewCart] = useState(false);
    const { addToCart } = useContext(cartContext);

    function onAdd(count){
        addToCart(item, count);
        setBtnViewCart(true);
    }          

    return(
        <>
            {
                btnViewCart ?
                <div className='container-itemDetail'>
                    <img src={item.urlPicture} alt="" />
                    <div className="container-description__detail">
                        <p>{item.id}</p>
                        <h1>{item.title}</h1>
                        <h4>{item.description}</h4>
                        <h1>${item.price}</h1>
                        <div className="container-btnAddToCart">
                            <Link to={'/cart'}><button>Ver Productos</button></Link>
                        </div>
                    </div>
                </div>
                :
                <div className='container-itemDetail'>
                    <img src={item.urlPicture} />
                    <div className="container-description__detail">
                        <p>{item.id}</p>
                        <h1>{item.title}</h1>
                        <h4>{item.description}</h4>
                        <h1>${item.price}</h1>
                        <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            }
        </>
  )
};

export default ItemDetail;
