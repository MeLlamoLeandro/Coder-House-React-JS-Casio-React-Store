import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProducts} from '../../src/helpers/asyncMock';
import ItemList from './ItemList';
import Banner from './Banner';
import CategoryContainer from './CategoryContainer';



const ItemListContainer = () => {
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    getProducts()
      .then((response) => {
        categoryId ? setProducts(response.filter((e) => e.category === categoryId)) : setProducts(response);
      })
      .catch((error) => {
        console.error(error);
      })
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