import React from 'react';
import "./ItemListContainer.css";
import ItemList from './ItemList';


 function ItemListContainer({ productos }) {
    return (

         <>
             {
                 productos.length === 0 ?
                     <p>Cargando...</p>
                     :
                     
                    
                      <ItemList productos={productos} />
                    
             }
         </>
     );
 };

export default ItemListContainer;