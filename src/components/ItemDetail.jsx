import React from 'react';

function ItemDetail({item}){

  return(
    <>
        {
            item.map((item) =>
                <div className='container-itemDetail'>
                    <img src={item.urlPicture} alt="" />
                    <div className="container-description__detail">
                        <p>{item.id}</p>
                        <p>{item.title}</p>
                        <p>{item.description}</p>
                        <p>${item.price}</p>
                    </div>
                </div>
            )
        }
    </>
  )
};

export default ItemDetail;
