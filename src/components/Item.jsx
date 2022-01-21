import ItemCount from "./ItemCount";

function Item({products}){
    
    function onAdd(count){ alert(count); }

    return(
        <>
            <img src={products.urlPicture} alt="" />
            <div className="container-product__description">
                <p>{products.id}</p>
                <p>{products.title}</p>
                <p>{products.description}</p>
                <p>${products.price}</p>
            </div>
            <ItemCount stock={10} initial={1} onAdd={onAdd}/>
        </>
    )
}

export default Item;