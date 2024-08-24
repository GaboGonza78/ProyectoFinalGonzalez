import React from 'react'
import { useState, useEffect } from 'react'
import { ItemDetail } from 'ItemDetail'
import { productos } from 'fetchData'
import { useParams } from 'react-router-dom'


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null)

    const { id } = useParams()
    
    useEffect(() => {
        productos(id)
            .then(response => {
                setProduct(response)
            })
            .catch(error => {
                console.error(error)
            })
    }, [id])

    return (
        <div className='ItemDetailContainer' >
            <ItemDetail {...product} />
        </div>
  )
}

export default ItemDetailContainer