import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from './ItemDetail';
import { getFireStore } from "../db/firebase";

function ItemDetailContainer(){

    const [item, setItem] = useState([]);
    const {id} = useParams();

    useEffect(() => {

      const db = getFireStore();
      const product = db.collection("products").doc(id);

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
