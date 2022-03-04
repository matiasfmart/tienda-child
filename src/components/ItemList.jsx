import Item from "./Item"
import { Row } from 'react-bootstrap'

function ItemList({products}){
    return (
        <Row xs={1} md={4} className="g-4 justify-content-around">
            {
                products.map((item) => (
                    <Item products={item} />
                ))
            }
        </Row>
    )
}

export default ItemList;