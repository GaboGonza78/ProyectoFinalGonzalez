import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemListContainer/ItemDetail';
import ItemCount from './components/ItemCount/ItemCount';

function App() {

  const [productos, setProductos] = useState([]);
  const [carrito, setCarrito] = useState([]);

  useEffect(() => {
    fetchData()
    .then(response => {
      setProductos(response);
    })
    .catch(err => console.error(err));
  },[]);

  return (
    <div className="App">
    
    <BrowserRouter>
    <Navbar />
    <Routes>
      <Route path="/" element={ <ItemListContainer productos={productos} carrito={carrito} 
      setCarrito={setCarrito} /> }/>
      <Route path="/detalle/:id" element={<ItemDetail productos={productos}/>} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </BrowserRouter>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
      
  );
}

export default App
