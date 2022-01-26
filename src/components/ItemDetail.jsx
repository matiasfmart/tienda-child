import React from 'react';
import ItemCount from './ItemCount';

function ItemDetail({item}){

    function onAdd(count){ alert(count); }

  return(
    <>
        {
            item.map((item) =>
                <div className='container-itemDetail'>
                    <img src={item.urlPicture} alt="" />
                    <div className="container-description__detail">
                        <p>{item.id}</p>
                        <h1>{item.title}</h1>
                        <h4>{item.description}</h4>
                        <h1>${item.price}</h1>
                        <ItemCount stock={10} initial={1} onAdd={onAdd}/>
                    </div>
                </div>
            )
        }
    </>
  )
};

export default ItemDetail;
