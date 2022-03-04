import { Link } from "react-router-dom";
import { Col, Card, Button } from 'react-bootstrap'

function Item({products}){

    return(
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" className="img-thumbnail" src={products.urlPicture} />
        <Card.Body>
            <Card.Title>{products.title}</Card.Title>
            <Card.Text>{products.description}</Card.Text>
            <Link to={`/Item/${products.id}`} ><Button variant="primary">Detalle</Button></Link>
        </Card.Body>
        </Card>
    )
}

export default Item;