import React from 'react';

function ItemDetail({item}){

    console.log(item);

  return(
    <>
        {
            item.map((item) =>
                <>
                    <img src={item.urlPicture} alt="" />
                    <div className="container-product__description">
                        <p>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                </>
            )
        }
    </>
  )
};

export default ItemDetail;
