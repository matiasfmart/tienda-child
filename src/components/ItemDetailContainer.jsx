import {promiseProducts} from './Products'
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';

function ItemDetailContainer(){

    const {item, setItem} = useState([]);
    const {id} = useParams();

    useEffect(() => {
      promiseProducts.then(res=> {
        if (id) {
            const idProduct = res.filter(e => e.id === id);
            setItem(idProduct);
        }else{
            setItem(res);
        }
      })
    
    }, [id]);

    return(
      <>
        <ItemDetail item={item}/>
      </>
  )
};

export default ItemDetailContainer;
