import Item from "./Item"

function ItemList({products}){
    return (
        <div>
            {
                products.map((item) => (
                    <div className="container-product">
                        <Item products={item} />
                    </div>
                ))
            }
        </div>
    )
}

export default ItemList;