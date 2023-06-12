import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail'
import { useParams } from 'react-router-dom'
import { getFirestore, doc, getDoc } from "firebase/firestore"

const ItemDetailContainer = () => {
    const [product, setProduct] = useState([])
    const { id } = useParams()

    useEffect(() => {

        const db = getFirestore();
        const productById = doc(db, "items", id)
        getDoc(productById)
            .then((resp) => {
                resp.exists() ? setProduct({ ...resp.data(), id: resp.id }) :
                    console.log("No such document!");
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
