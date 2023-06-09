import { useContext, useState } from 'react';
import ItemCount from './ItemCount';
import ItemSpecList from './ItemSpecList';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';



const ItemDetail = ({ prodDetail }) => {

    const [quantityAdded, setQuantityAdded] = useState(0)

    const {addItem} = useContext(CartContext)

    const handleOnAdd = (quantity) => {
        setQuantityAdded(quantity)
        addItem(prodDetail, quantity)
    }

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-2"></div>
                <div className="col-6">
                    <div>
                        <ItemSpecList prodDetail={prodDetail} />
                    </div>
                </div>
                <div className="col-4">
                    <div className="card d-flex justify-content-center cardItemDetailStyle sticky-top">
                        <div className="card-body text-start">
                            <h5 className="fw-medium mb-2">{prodDetail.title}</h5>
                            <h5 className="fw-medium mb-2">{prodDetail.subtitle}</h5>
                            <h2 className="fs-1">{prodDetail.model}</h2>
                            <p className="card-text text-dark text-end fs-5 fw-normal">${prodDetail.price}</p>
                            <div className="d-flex justify-content-center align-items-center add-container">
                                {quantityAdded > 0 ?
                                    (<div className="my-5 py-5 d-grid gap-3"><Link to="/Cart"className='btn btn-dark rounded-0 btn-addCart background-secondary'><span title='VIEW CART'>VIEW CART</span></Link>
                                    <Link to="/"className="btn btn-outline-dark btn-inverse rounded-0"><span title='Continue Shopping'>Continue Shopping</span></Link></div>) :
                                    (<ItemCount imgMini={prodDetail.img1} imgAlt={prodDetail.model} initial={1} stock={prodDetail.stock} onAdd={handleOnAdd} />)}
                            </div>
                            <section className='descriptionItem m-2 '>
                                <p className='text-justify'>{prodDetail.description}</p>
                            </section>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
