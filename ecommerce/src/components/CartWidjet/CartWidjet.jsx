import { useAppContext } from '../Context';
import cart from './assets/carrito.jpg'

const CartWidjet = () => {

    const { carrito } = useAppContext();

    return(
        <div onClick={() => console.log("AHORA VAS A VER EL CARRITO", carrito)}>
            <p>{carrito.length}</p>
            <img src={cart} alt="Cart Widget" width={40}/>
            0
        </div>
    )
}

export default CartWidjet;