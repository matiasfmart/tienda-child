import ItemList from "./ItemList";
import { promiseProducts } from "./Products";
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import CarouselIndex from "./CarouselIndex";
import { getFireStore } from "../db/firebase";

function ItemListContainer({greeting}){

    const [arrayProducts, setArrayProducts] = useState([]);
    const {type} = useParams();

    // useEffect(() => {
    //     if (type) {
    //         const typeOf = arrayProducts.filter(x => x.type === type);
    //         setArrayProducts(typeOf);
    //     }else{
    //         setArrayProducts(arrayProducts);
    //     }
    // },[type]);

    // useEffect(() => {
    //     //setLoading()
    //     const db = getFireStore();
    //     if (type) {            
    //         db.collection('products').where('type', '==', type).get()
    //             .then((querySnapShot) =>{
    //                 if (querySnapShot.size === 0) {
    //                     console.log('No Results!');
    //                 }
    //                 setArrayProducts(querySnapshot.docs.map((doc) => { 
    //                     return { id: doc.id, ...doc.data() }
    //                 }));
    //             })
    //     } else {
    //         db.collection('products').get()
    //         .then((querySnapShot) => {
    //             if (querySnapShot.size ===0) {
    //                 console.log('No Results!')
    //             }

    //             setArrayProducts(querySnapShot.docs.map((doc) => {
    //                 return { id: doc.id, ...doc.data()}
    //             }))
    //         }
    //     }

    // }, [type]);

    useEffect(() => {

        const db = getFireStore()

        if (type) {

            db.collection("products").where("type", "==", type).get()
                .then((querySnapShot) => {
                    if (querySnapShot.size === 0) {
                        console.log("No results!");
                        return
                    }

                    setArrayProducts(querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    }))
                })

        } else {

            db.collection("products").get()
                .then((querySnapShot) => {
                    if (querySnapShot.size === 0) {
                        console.log("No Results!");
                        return
                    }


                    setArrayProducts(querySnapShot.docs.map((doc) => {
                        return { id: doc.id, ...doc.data() }
                    }))
                })

                .catch((err) => {
                    console.log(err)
                })
        }
    }, [type])

    let nav = document.getElementById('nav');
    console.log(nav);

    return (
        <>
            {
                type ? <div></div> : <CarouselIndex/>
            }
            <div className="container">
                <div className="row greeting">
                    <h1 className="text-center">{greeting}</h1>
                </div>
                {arrayProducts.length > 0 ? 
                        <ItemList products={arrayProducts} />
                    :
                    <>
                        loading...
                    </>
                }
            </div>
        </>
    )
}

export default ItemListContainer;