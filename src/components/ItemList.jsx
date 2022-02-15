import Item from "./Item"
import { Row } from 'react-bootstrap'

function ItemList({products}){
    return (
        <Row xs={2} md={4} className="g-4">
            {
                products.map((item) => (
                    <Item products={item} />
                ))
            }
        </Row>
    )
}

export default ItemList;