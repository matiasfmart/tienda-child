import ItemCount from "./ItemCount";

function Item({products}){
    return(
        <>
            <img src={products.urlPicture} alt="" />
            <div className="container-product__description">
                <h5>{products.id}</h5>
                <h1>{products.title}</h1>
                <p>{products.description}</p>
                <h1>{products.price}</h1>
            </div>
        </>
    )
}

export default Item;