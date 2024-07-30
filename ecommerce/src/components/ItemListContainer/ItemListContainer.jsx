import React, { useState } from 'react';
import "./ItemListContainer.css";
import ItemList from './ItemList';
import Navbar from '../Navbar';
import CategoryFilter from './CategoryFilter'; // Recordar importar el filtro de categorías

function ItemListContainer({ productos }) {
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = ['Guitarra', 'Bajo', 'Bateria'];

    const filteredProducts = selectedCategory
        ? productos.filter(product => product.categoria === selectedCategory)
        : productos;

    return (
        <>
            <Navbar />
            {
                productos.length === 0 ?
                    <p>Cargando...</p>
                    :
                    <>
                        <h1 style={{padding: "2rem"}}>Tienda de Instrumentos Musicales</h1>
                        
                        <CategoryFilter
                            categories={categories}
                            selectedCategory={selectedCategory}
                            onSelectCategory={setSelectedCategory}
                        />
                        <ItemList productos={filteredProducts} />
                    </>
            }
        </>
    );
};

export default ItemListContainer;
