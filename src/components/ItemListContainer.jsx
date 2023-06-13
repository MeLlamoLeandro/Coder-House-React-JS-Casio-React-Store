import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemList from './ItemList';
import Banner from './Banner';
import CategoryContainer from './CategoryContainer';
import { getFirestore, collection, getDocs, query, where} from "firebase/firestore";



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore();//conecta con la base de datos
    const itemsCollection = collection(db, "items")//selecciona la coleccion
    const q = categoryId ? query(itemsCollection, where("category", "==", categoryId)) : itemsCollection;//si hay categoria filtra por categoria
    getDocs(q).then((querySnapshot) => {
      if (querySnapshot.size > 0) {
        setProducts(querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })))//mapea los datos de la coleccion en un array
      } else {
        console.log("No such document!");
      }
    })
      .catch((error) => { console.error(error); })
  }, [categoryId]);

  return (
    <div>
      {categoryId ? null : <Banner />}
      <div className="container my-5">
        <div className="row">
          <div className="col text-center">
            {categoryId ? null : <CategoryContainer />}
            {categoryId ? null : <h2 className='m-2'>New Products</h2>}
            <div>
              <ItemList products={products} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ItemListContainer