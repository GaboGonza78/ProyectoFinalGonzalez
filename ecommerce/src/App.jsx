import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import fetchData from './fetchData';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NotFound from './components/NotFound';
import ItemDetail from './components/ItemListContainer/ItemDetail';
import ItemCount from './components/ItemCount/ItemCount';
import { ContextProvider } from './components/Context';
import Cart from './components/Cart';


function App() {

    useEffect(() => {
    
    },[]);

  return (
    <div className="App">
    <ContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={ <ItemListContainer /> }/>
            <Route path='/category/:categoryId' element={<ItemListContainer />} />
            <Route path="/detalle/:id" element={<ItemDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        </ContextProvider>
      <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log('Cantidad agregada ',quantity)}/>
    </div>
      
   );
}

export default App;

