import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { cartContext } from '../context/CartProvider';
import React, { useContext } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';

function NavBar() {

    return (
        <Navbar collapseOnSelect expand="lg" id='nav' className="nav container-fluid">
            <Container  className="">
                <Navbar.Brand><Link className='nav-title' to={'/'}>Child</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav"/>
                <Navbar.Collapse id="responsive-navbar-nav" className="">
                    <Nav>
                        <Nav.Link><Link to={'/category/01'} className="text-decoration-none text-secondary" >0 - 1 años</Link></Nav.Link>
                        <Nav.Link><Link to={'/category/24'} className="text-decoration-none text-secondary" >2 - 4 años</Link></Nav.Link>
                        <Nav.Link><Link to={'/category/ac'} className="text-decoration-none text-secondary" >Accesorios</Link></Nav.Link>
                        <Nav.Link><Link to={'/contacto'} className="text-decoration-none text-secondary" >Contacto</Link></Nav.Link>
                    </Nav>
                    <Link to={'/cart'} className="text-decoration-none text-secondary" ><CartWidget /></Link>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar;