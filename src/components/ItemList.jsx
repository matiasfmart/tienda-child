import Item from "./Item"

function ItemList({products}){
    return (
        <div>
            {
                products.map(
                    <Item products={products} />
                )
            }
        </div>
    )
}

export default ItemList