import { useState } from 'react';
import icon_bag from './images/icon_bag.svg';

const ItemCount = ({ initial, stock, onAdd, imgMini, imgAlt }) => {
  const [quantity, setQuantity] = useState(initial);

  const handleChange = (event) => {
    const value = parseInt(event.target.value);
    if (!isNaN(value) && value >= 1 && value <= stock) {
      setQuantity(value);
    }
  };

  const increment = () => {
    quantity < stock && setQuantity(quantity + 1)
  }

  const decrement = () => {
    quantity > 1 && setQuantity(quantity - 1)
  }

  return (
    <div className='counterCard'>
      <div className='counterRow d-flex justify-content-center align-items-center gap-3'>
        <div>
          <img src={imgMini} alt={imgAlt} height={84} className='border border-dark background-primary' />
        </div>
        <div className='d-flex align-items-center justify-items-center'>
          <button className='btn btn-plus rounded-0' onClick={decrement}>-</button>
          <input className='counterInput text-center' type='number' value={quantity} onChange={handleChange} style={{ 'WebkitAppearance': 'none', 'margin': '0' }} />
          <button className='btn btn-minus rounded-0' onClick={increment}>+</button>
        </div>
      </div>
      <div className='d-grid my-3'>
        <button className="btn btn-dark rounded-0 btn-addCart background-secondary" title='ADD CART' onClick={() => onAdd(quantity)} disabled={!stock}>ADD CART<img className="btn-buy_bag" src={icon_bag} alt='Add Cart' /></button>
      </div>
    </div>
  )
}

export default ItemCount

