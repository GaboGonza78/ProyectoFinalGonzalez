import CartWidjet from "./CartWidjet/CartWidjet";
import './Navbar.css'


const Navbar = () => {
    return(
        <nav>
            <img src="src/assets/images/clavedesol.jpg" alt="Clave de Sol" width="100px"></img>
            <div>
                <button>Home</button>
                <button>Productos</button>
                <button>Contacto</button>
            
            </div>
                <CartWidjet />
        </nav>
    )
};

export default Navbar