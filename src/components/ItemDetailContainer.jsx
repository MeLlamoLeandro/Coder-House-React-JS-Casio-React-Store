import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { getProductById } from '../helpers/asyncMock'
import { useParams } from 'react-router-dom'

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const {id} = useParams()

    useEffect(() => {
        getProductById(Number(id))
            .then((resp) => {
                setProduct(resp);
            })
            .catch((error) => {
                console.error(error)
            })
    }, [id]);
    return (
        <div>
            <ItemDetail prodDetail={product} />
        </div>
    )
}

export default ItemDetailContainer

/* esta tiene que pasar propiedad de un producto a mostrar a ItemDetail*/