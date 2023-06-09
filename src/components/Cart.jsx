import { useContext } from 'react'
import { CartContext } from '../context/CartContext'
import { Link } from 'react-router-dom'
import CartItem from './CartItem';
import { ReactComponent as IconX } from "./images/x.svg";
import { ReactComponent as IconQuestion } from "./images/question.svg";
import { ReactComponent as IconCard } from "./images/ccard.svg";


const Cart = () => {
  const { cart, totalItems, totalPrices, clean } = useContext(CartContext);

  return (
    <div className='container-fluid'>
      <div className='row py-4'>

        {cart.length === 0 ?
          (<div className='d-flex align-items-center flex-column mb-3'><h2 className='text-center text-dark fs-6'>You have no items in your shopping cart.</h2><Link to="/" className='btn btn-dark rounded-0 btn-buyNow background-secondary mt-2'>Products</Link></div>) :
          (
            <>
              <div className='col-8'>
                {cart.map((item) => <CartItem {...item} key={item.id} />)}
                <div className="row py-4">
                  <div className="col-4">
                    <h4>Order Summary</h4>
                  </div >
                  <div className="col-8">
                    <table className="table table-borderless align-middle">
                      <tbody>
                        <tr>
                          <td className="col-10 fs-14">Total Items:</td>
                          <td className="col-12 fs-14 text-end">{totalItems()}</td>
                        </tr>
                        <tr>
                          <td className="col-10 fs-14">Cart Subtotal: <IconQuestion title='The subtotal is before any discounts and does not include shipping costs or applicable taxes.' /></td>
                          <td className="col-2 fs-14 text-end">${totalPrices()}</td>
                        </tr>
                        <tr>
                          <td className="col-10 fs-14">Shipping: <IconQuestion title='Shipping cost will be calculated after the shipping address is entered and the shipped method is selected' /></td>
                          <td className="col-2 fs-14 text-end">$0.00</td>
                        </tr>
                        <tr>
                          <td className="col-10 fs-14">Tax: <IconQuestion title='Actual tax will be calculated based on applicable taxes when your order is shipped.' /></td>
                          <td className="col-2 fs-14 text-end">$0.00</td>
                        </tr>
                        <tr className='background-primary'>
                          <td className="col-10">Estimated Total:</td>
                          <td className="col-2 text-end">${totalPrices()}</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <div className='col-4'>
                <div className='background-primary p-3'>
                  <h3>Summary</h3>
                  <table>
                    <tbody>
                      <tr>
                        <td className="col-10 fs-14">Total Items:</td>
                        <td className="col-12 fs-14 text-end">{totalItems()}</td>
                      </tr>
                      <tr>
                        <td className="col-10 fs-14">Cart Subtotal: <IconQuestion title='The subtotal is before any discounts and does not include shipping costs or applicable taxes.' /></td>
                        <td className="col-2 fs-14 text-end">${totalPrices()}</td>
                      </tr>
                      <tr>
                        <td className="col-10 fs-14">Shipping: <IconQuestion title='Shipping cost will be calculated after the shipping address is entered and the shipped method is selected' /></td>
                        <td className="col-2 fs-14 text-end">$0.00</td>
                      </tr>
                      <tr>
                        <td className="col-10 fs-14">Tax: <IconQuestion title='Actual tax will be calculated based on applicable taxes when your order is shipped.' /></td>
                        <td className="col-2 fs-14 text-end">$0.00</td>
                      </tr>
                      <tr className=''>
                        <td className="col-10">Estimated Total:</td>
                        <td className="col-2 text-end">${totalPrices()}</td>
                      </tr>
                    </tbody>
                  </table>

                  <div className='d-flex justify-content-between align-items-center gap-3 mt-2'>
                    <Link to="/checkout" className='btn btn-dark rounded-0 btn-buyNow background-secondary'><IconCard /> PROCEED TO CHECKOUT</Link>
                    <button className='btn btn-dark rounded-0 btn-buyNow background-secondary' onClick={clean}><IconX /> CLEAN CART</button>
                  </div>
                </div>

              </div>
            </>
          )}
      </div>
    </div >
  )
}

export default Cart