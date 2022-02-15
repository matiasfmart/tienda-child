import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFireStore } from "../db/firebase";

function ItemDetailContainer(){

    const [item, setItem] = useState([]);
    const {id} = useParams();

    // useEffect(() => {
    //   promiseProducts.then(res=> {
    //     if (id) {
    //         const idProduct = res.filter(e => e.id === id);
    //         setItem(...idProduct);
    //         console.log(...idProduct);
    //     }else{
    //         setItem(res);
    //     }
    //   })
    
    // }, [id]);

    useEffect(() => {

      const db = getFireStore();
      const itemList = db.collection("products");

      const product = itemList.doc(id);

      product.get()
          .then((doc) => {
              console.log(doc.data())
              if(!doc.exists) {
                  console.log("No exist the product!");
                  return
              }
              setItem({id: doc.id, ...doc.data()});
          })
          .catch((err) =>{
              console.log(err);
          })
  }, [id])

    return(
      <>
        <ItemDetail item={item}/>
      </>
  )
};

export default ItemDetailContainer;
