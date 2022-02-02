import ItemCount from "./ItemCount";
import { Link } from "react-router-dom";

function Item({products}){

    return(
        <>
            <img src={products.urlPicture} alt="" />
            <div className="container-product__description">
                <div className="container-product__title">
                    <p>{products.title}</p>
                    <p>{products.id}</p>
                </div>
                <h1>${products.price}</h1>
            </div>
            {/* <ItemCount stock={10} initial={1} onAdd={onAdd}/> */}
            <Link to={`/Item/${products.id}`} >Detalle</Link>
        </>
    )
}

export default Item;