import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchData from './fetchData';


function App() {

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    fetchData()
    .then(response => {
      setProductos(response);
    })
    .catch(err => console.error(err));
  },[]);

  return (
    <div className="App">
    <Navbar />
    <ItemListContainer greeting={'Articulos Disponibles'} productos={productos} />
    </div>
      
  );
}

export default App
