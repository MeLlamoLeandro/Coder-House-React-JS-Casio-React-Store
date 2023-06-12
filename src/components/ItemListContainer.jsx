import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
/* import { getProducts} from '../../src/helpers/asyncMock'; */
import ItemList from './ItemList';
import Banner from './Banner';
import CategoryContainer from './CategoryContainer';
import { getFirestore, collection, getDocs } from "firebase/firestore";



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    const db = getFirestore();//conecta con la base de datos
    const productsCollection = collection(db, "items")//selecciona la coleccion
    getDocs(productsCollection).then((result) => {
      if (result.size > 0) {
        const allData = (result.docs.map(doc => ({ ...doc.data(), id: doc.id })))//mapea los datos de la coleccion en un array
        categoryId ? setProducts(allData.filter((e) => e.category === categoryId)) : setProducts(allData);
      }else{
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