import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import Item from './Item';
import ItemCount from '../ItemCount/ItemCount.jsx';
import './ItemDetail.css';

function ItemDetail({ productos, stock, onAddToCart }) {
    const { id } = useParams();
    const [productoSeleccionado, setProductoSeleccionado] = useState({});
    const [cantidad, setCantidad] = useState(0); 

    useEffect(() => {
        const findproduct = productos.find(el => el.id === parseInt(id));
        setProductoSeleccionado(findproduct);
    }, [id, productos]);

    const handleOnAdd = (quantity) => {
        setCantidad(quantity);  
        onAddToCart(productoSeleccionado, quantity); 
    };

    return (
        <div>
            <p>
                Detalle del producto {productoSeleccionado?.nombre}
            </p>
            {productoSeleccionado && (
                <Item 
                    key={productoSeleccionado.id} 
                    id={productoSeleccionado.id} 
                    nombre={productoSeleccionado.nombre} 
                    precio={productoSeleccionado.precio} 
                />
            )}
            <footer className='ItemFooter'>
                {cantidad > 0 ? ( 
                    <Link to='/cart' className='Option'>Terminar compra</Link>
                ) : (
                    <ItemCount initial={1} stock={stock} onAdd={handleOnAdd} />
                )}
            </footer>
        </div>
    );
}

export default ItemDetail;
