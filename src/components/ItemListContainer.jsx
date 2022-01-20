import ItemList from "./ItemList";
import React, { useState, useEffect } from "react";

function ItemListContainer({greeting}){

    function onAdd(count){ alert(count); }

    const [arrayProducts, setArrayProducts] = useState([]);  
        
    const promiseProducts = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve([
              {id: 1234, title: 'Remera', description:'Adidas' , price:1100 , urlPicture: "10"},
              {id: 2345, title: 'Pantalon', description:'Narrow' , price:2200 , urlPicture: "2"},
              {id: 3456, title: 'Pulsera', description:'Biju' , price:150 , urlPicture: "0"},
            ]);
        }, 2000);
    });
    useEffect(() => {
        promiseProducts.then(res =>{
            setArrayProducts(res);
        });
    },[]);

    return (
        <>
            <h1>{greeting}</h1>
            {arrayProducts.length > 0 ? 
                <>
                    <ItemList products={arrayProducts} />
                </>
                :
                <>
                    loading...
                </>
            }
            {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
        </>
    )
}

export default ItemListContainer;