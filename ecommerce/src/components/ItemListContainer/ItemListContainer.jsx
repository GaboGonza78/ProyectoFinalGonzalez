import React, { useEffect, useState } from 'react';
import "./ItemListContainer.css";
import ItemList from './ItemList';
import Navbar from '../Navbar';
import CategoryFilter from './CategoryFilter';
import Loader from '../Loader';
import { useAppContext } from '../Context';

const ItemListContainer = () => {

    const {cargarData, productos} = useAppContext();

    const dataContext = useAppContext();
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = ['Guitarra', 'Bajo', 'Bateria'];

    const filteredProducts = selectedCategory
        ? productos.filter(product => product.categoria === selectedCategory)
        : productos;

    useEffect(() => {
        cargarData();
    });

    return (
        <>
            <Navbar />
            {
                productos.length === 0 ?
                    <Loader />
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
