import React from "react";
import { Link } from "react-router-dom";
import CartWidjet from "./CartWidjet/CartWidjet";
import './Navbar.css'


function Navbar() {
    return (
        <div className="nav-bar">
            <ul className="nav-items">
                <li className="item-nav">
                    <img src="src/assets/images/clavedesol.jpg" alt="Clave de Sol" width="100px"></img>
                </li>
                <li className="item-nav">
                    <Link to="/">
                    <a className="item-text">Home</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/productos">
                    <a className="item-text">Productos</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <Link to="/contacto">
                    <a className="item-text">Contacto</a>
                    </Link>
                </li>
                <li className="item-nav">
                    <CartWidjet />
                </li>
            </ul>
        </div>
    )
}
export default Navbar