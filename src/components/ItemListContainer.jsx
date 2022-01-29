import ItemList from "./ItemList";
import { promiseProducts } from "./Products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function ItemListContainer({greeting}){

    const [arrayProducts, setArrayProducts] = useState([]);
    const {type} = useParams();

    useEffect(() => {
        promiseProducts.then(res =>{
            if (type) {
                const typeOf = res.filter(x => x.type === type);
                setArrayProducts(typeOf);
            }else{
                setArrayProducts(res);
            }
        });
    },[type]);

    return (
        <>
            <h1>{greeting}</h1>
            {arrayProducts.length > 0 ? 
                <div className="container-productsItem">
                    <ItemList products={arrayProducts} />
                </div>
                :
                <>
                    loading...
                </>
            }
        </>
    )
}

export default ItemListContainer;