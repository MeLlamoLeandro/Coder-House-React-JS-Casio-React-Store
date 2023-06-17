import { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { getFirestore, collection, query, where, getDocs } from "firebase/firestore";
import { useLocation } from 'react-router-dom';


const ItemSearchContainer = () => {
    const [products, setProducts] = useState([])
    const location = useLocation();
    const searchTerm = new URLSearchParams(location.search).get('query');

    useEffect(() => {
        const searchResults = async () => {

            const db = getFirestore();
            const itemsCollection = collection(db, 'items');
            const q = query(itemsCollection, where('title', '==', searchTerm));

            const querySnapshot = await getDocs(q);

            if (querySnapshot.size > 0) {
                // La búsqueda arrojó resultados
                setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))//mapea los datos de la coleccion en un array
            } else {
                console.log("No such document!");
       
            }

        };

        // Llama a la función de búsqueda al cargar el componente
        searchResults();
    }, [searchTerm]);




    return (
        <div>
            <div className="container my-5">
                <div className="row">
                    <div className="col text-center">
                        <h2 className='m-2'>Search Results</h2>
                        <div>
                            {products?<p className="text-dark">No results found</p>:<ItemList products={products} />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ItemSearchContainer