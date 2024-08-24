import React from 'react';
import { useAppContext } from './Context'


const Cart = () => {
    const { carrito } = useAppContext();
    return (
        <div>Este es mi carrito
            <button onClick={() => console.log(carrito)}>
                Mostrar carrito
            </button>
        </div>
    );
};

export default Cart;