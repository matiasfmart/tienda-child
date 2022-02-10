import { Link } from "react-router-dom";
import CartWidget from "./CartWidget";
import { cartContext } from '../context/CartProvider';
import React, { useContext } from 'react';

function NavBar() {

    const { cart } = useContext(cartContext);

    return (
        <div className="nav">
            <input type="checkbox" id="nav-check" />
            <div className="nav-header">
                <Link className='nav-title' to={'/'}>Child</Link>
            </div>
            <div className="nav-btn">
                <label>
                    <span></span>
                    <span></span>
                    <span></span>
                </label>
            </div>

            <div className="nav-links">
                <Link to={'/category/01'}>0 - 1 años</Link>
                <Link to={'/category/24'}>2 - 4 años</Link>
                <Link to={'/category/ac'}>Accesorios</Link>
                <Link to={'/contacto'}>Contacto</Link>
            </div>
            <div className="container-cart">
                <Link to={'/cart'}><CartWidget /></Link>
            </div>
        </div>
    )
}

export default NavBar;