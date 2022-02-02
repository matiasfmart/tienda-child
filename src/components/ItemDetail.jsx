import React from 'react';
import { useState } from 'react/cjs/react.development';
import { Link } from "react-router-dom";
import ItemCount from './ItemCount';

function ItemDetail({item}){

    const [quantity, setQuantity] = useState();
    const [btnViewCart, setBtnViewCart] = useState(false);

    function onAdd(count){
        setQuantity(count);
        setBtnViewCart(true)
    }

    return(
        <>
            {
                btnViewCart ?
                item.map((item) =>
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
                )
                :
                item.map((item) =>
                    <div className='container-itemDetail'>
                        <img src={item.urlPicture} alt="" />
                        <div className="container-description__detail">
                            <p>{item.id}</p>
                            <h1>{item.title}</h1>
                            <h4>{item.description}</h4>
                            <h1>${item.price}</h1>
                            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                        </div>
                    </div>
                )
            }
        </>
  )
};

export default ItemDetail;
