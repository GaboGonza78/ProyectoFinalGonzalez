import React from 'react'
import './Item.css';

const Item = ({ nombre, precio, id }) => {
    return (
        <div key={id} className="card-item">
            <h3 style={{ justifySelf: "center" }}>{nombre}</h3>
            <img className="img" src="./src/assets/images/clavedesol.jpg" />
            <p>Precio: <b>${precio}</b></p>
            <button>Agregar al carrito</button>
            
        </div>
    );
};

export default Item;