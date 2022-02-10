import React, { useState } from "react";

function ItemCount({stock, initial, onAdd}) {

    const [count, setCount] = useState(initial ? initial : 0);

    function remove(){ count ? setCount(count - 1) : setCount(0) }
    function add(){ count < stock ? setCount(count + 1) : setCount(count) }
    function toOnAdd(){
        count ? onAdd(count) : alert('No ingreso productos a su compra');
    }

    return ( 
        <>
            <div className="btn-group">
                <button onClick={()=> remove() } className="btn btn-outline-primary">-</button>
                <h4 className="count">{count}</h4>
                <button onClick={()=> add() } className="btn btn-outline-primary">+</button>
            </div>
            <div className="container-btnAddToCart">
                <button onClick={()=> toOnAdd()} type='submit' className="btn btn-primary btn-lg">Agregar</button>
            </div>
        </>
    )
}

export default ItemCount;