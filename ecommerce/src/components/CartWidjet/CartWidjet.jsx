import { useAppContext } from '../Context';
import cart from './assets/carrito.jpg'
import { Link } from 'react-router-dom';


const CartWidjet = () => {

    const { carrito, crearOrden } = useAppContext();

     const handleCarrito = () => {
         crearOrden();
     };

    return(
        
        <div>
            {
                carrito.length > 0 ?
                    <link to="/cart">
                        <p>{carrito.length}</p>
                        <img src={cart} alt="Cart Widget" width={40}/>
                        0
                    </link>
                    :
                    <div onClick={() => handleCarrito()}>
                        <p>{carrito.length}</p>
                        <img src={cart} alt="Cart Widget" width={40}/>
                        0
                    </div>
            }
        </div>

    )
}

export default CartWidjet;