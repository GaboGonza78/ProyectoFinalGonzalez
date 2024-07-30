import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Item from './Item';

function ItemDetail({ productos }) {
    const { id } = useParams();

    const [productoSeleccionado, setProductoSeleccionado] = useState({});

    useEffect(() => {
        const findproduct = productos.find(el => el.id === parseInt(id));
        setProductoSeleccionado(findproduct);
    }, []);

    return (
        <div>
            <p>
                Detalle del producto {productoSeleccionado.nombre}
            </p>
            <Item key={productoSeleccionado.id} id={productoSeleccionado.id} nombre={productoSeleccionado.nombre} precio={productoSeleccionado.precio} />
        </div>
    );
}

export default ItemDetail