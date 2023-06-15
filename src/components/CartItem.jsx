import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { ReactComponent as IconTrash } from "./images/trash.svg";
import { Link } from 'react-router-dom';

const CartItem = ({ img1, model, quantity, price, id }) => {
    const { removeItem } = useContext(CartContext);
    return (
        <div className='row border-bottom py-3'>
            <div className="col-8">
                <Link to={`/item/${id}`}><img className="img-fluid" src={img1} alt={model} width="175" /></Link>
            </div>
            <div className="col-4">
                <h2>{model}</h2>
                <p className='textCartItem'>Quantity: {quantity} x ${price}</p>
                <p className='textCartItem'>Item Subtotal: ${(quantity * price).toFixed(2)}</p>
                <button className='btn btn-outline-dark btn-inverse rounded-0' onClick={() => removeItem(id)}><IconTrash />Remove Item</button>
            </div>
        </div>
    )
}

export default CartItem
