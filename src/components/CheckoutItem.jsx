

import { Link } from 'react-router-dom';

const CheckoutItem = ({ img1, model, quantity, price, id }) => {

    return (
        <div className='d-flex border-bottom py-3'>
            <div className="col-4" style={{padding: "10px"}}>
                <Link to={`/item/${id}`}><img className="img-fluid" src={img1} alt={model} width="90" /></Link>
            </div>
            <div className="col-8" style={{padding: "8px 20px 8px 12px"}}>
                <div className='d-flex justify-content-between align-items-center mb-2'>
                    <h6 className='fs-14 mb-0'>{model}</h6>
                    <p className='fs-14 mb-0'>${(quantity * price).toFixed(2)}</p>
                </div>
                <p style={{fontSize:"13px",fontWeight: "400"}}>Quantity: {quantity}</p>
            </div>
        </div>
    )
}

export default CheckoutItem
