import { createContext, useContext, useState } from "react";
import fetchData from '../fetchData.js';
import { initializeApp } from "firebase/app";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import Swal from "sweetalert2";

const firebaseConfig = {
    apiKey: "AIzaSyBpcREvE_N-SFJm2ZnsveKiRmQ-_GPvRbo",
    authDomain: "react-flex-gonzalez-62325.firebaseapp.com",
    projectId: "react-flex-gonzalez-62325",
    storageBucket: "react-flex-gonzalez-62325.appspot.com",
    messagingSenderId: "411656599560",
    appId: "1:411656599560:web:903b51e2d2831642fd79bd"
  };
  
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

const productsCollection = collection(db, "productos");
const ordersCollection = collection(db, "ordenes");


const AppContext = createContext();

export const useAppContext = () => useContext(AppContext);

export const ContextProvider = (props) => {

    const [productos, setProductos] = useState([]);
    const [carrito, setCarrito] = useState([]);
    
    function cargarData() {
        
        getDocs(productsCollection).then(snapshot => {
            let arrayProductos = snapshot.docs.map(el => el.data());
            setProductos(arrayProductos);
        }).catch(err => console.error(err));

    }

    function agregarAlCarrito(id) {
        const carritoAuxiliar = [...carrito];
    
        const productoAAgregar = productos.find(el => el.id === id);
    
        carritoAuxiliar.push(productoAAgregar);
        setCarrito(carritoAuxiliar);
    }

    function crearOrden() {

        if(carrito.length > 0){
            const nuevaOrden = {
                nombre: "Gabriel Gonzalez",
                telefono: 1234567890,
                mail: "Gabo@gmail.com",
                productos: carrito,
        };


        addDoc(ordersCollection, nuevaOrden).then(response => {
            console.log("Orden creada correctamente con el id: " + response.id);
            setCarrito([]);
        }).catch(err => {
            alert("Algo falló, intente mas tarde");
            console.error(err);
        });
    } else {
        Swal.fire({
            title: "Error",
            text: "Tu carrito está vacío!",
            icon: "error"
          });
    }   
    }
  
    return (
        <AppContext.Provider value={{productos, carrito, setCarrito, cargarData, agregarAlCarrito, crearOrden}}>
            {props.children}
        </AppContext.Provider>
    )
}

