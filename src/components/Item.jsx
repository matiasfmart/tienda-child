import ItemCount from "./ItemCount";

function Item({products}){
    return(
        <>
            <img src={products.urlPicture} alt="" />
            <div className="container-product__description">
                <p>{products.id}</p>
                <p>{products.title}</p>
                <p>{products.description}</p>
                <p>${products.price}</p>
            </div>
            <ItemCount />
        </>
    )
}

export default Item;