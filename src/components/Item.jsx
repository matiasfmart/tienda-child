import { Link } from "react-router-dom";
import { Col, Card, Button } from 'react-bootstrap'

function Item({products}){

    return(
        <Col>
            {/* <img src={products.urlPicture} alt="" />
            <div className="container-product__description">
                <div className="container-product__title">
                    <p>{products.title}</p>
                    <p>{products.id}</p>
                </div>
                <h1>${products.price}</h1>
            </div>
            <Link to={`/Item/${products.id}`} >Detalle</Link> */}

            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={products.urlPicture} />
            <Card.Body>
                <Card.Title>{products.title}</Card.Title>
                <Card.Text>{products.description}</Card.Text>
                <Link to={`/Item/${products.id}`} ><Button variant="primary">Detalle</Button></Link>
            </Card.Body>
            </Card>
        </Col>
    )
}

export default Item;