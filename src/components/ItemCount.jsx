import React, { useState } from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial ? initial : 0);

    function remove(){ count ? setCount(count - 1) : setCount(0) }
    function add(){ count < stock ? setCount(count + 1) : setCount(count) }
    function toOnAdd(){
        count ? onAdd(count) : alert('No ingreso productos a su compra');
    }

    return ( 
        <div className="container-itemCount">
            <div className="container-btnCart">
                <button onClick={()=> remove() } className="btn-remove">-</button>
                <h2 className="count">{count}</h2>
                <button onClick={()=> add() } className="btn-add">+</button>
            </div>
            <div className="container-btnAddToCart">
                <button onClick={()=> toOnAdd()} className="btn-addToCart">Agregar</button>
            </div>
        </div>
    )
}

export default ItemCount;