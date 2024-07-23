import React from 'react';
import Item from './Item';

const ItemList = ({productos}) => {
    return (
        <div className="item-list">
            
            {
                productos.map((el, index) => {
                    return (
                        <Item index={index} nombre={el.nombre} precio={el.precio} />
                    )
                })
            }
        </div>
    );
};

export default ItemList;