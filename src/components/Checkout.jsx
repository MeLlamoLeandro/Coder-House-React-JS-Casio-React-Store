import { useContext, useState } from 'react'
import { CartContext } from '../context/CartContext'
import CheckoutItem from './CheckoutItem.jsx'
import { Link, useNavigate } from 'react-router-dom'
import { ReactComponent as IconQuestion } from "./images/question.svg";
import { getFirestore, collection, addDoc } from "firebase/firestore";
import logoCasio from "./images/new_logo_casio_r_store-min.png";

const Checkout = () => {
    const navigate = useNavigate();

    const { cart, totalItems, totalPrices, clean } = useContext(CartContext);


    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [orderId, setOrderId] = useState('');
    const [showPopup, setShowPopup] = useState(false);



    const pushOrder = () => {
        const buyer = { name: name, email: email, phone: phone }
        const items = cart.map((item) => ({ id: item.id, title: item.model, quantity: item.quantity, price: item.price }))
        const total = totalPrices()
        const itemsCount = totalItems()
        const date = new Date().toLocaleDateString()

        const order = { buyer: buyer, items: items, total: total, itemsCount: itemsCount, date: date }

        //inserto el documento en firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((docRef) => {
            setOrderId(docRef.id)
            setShowPopup(true) //muestro el popup

        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

    // Definir el estilo del popup
    const popupStyle = {
        position: showPopup ? 'fixed' : undefined
    };

    const exitPopup = () => {
        setShowPopup(false)
        clean()
        navigate("/")
    }


    return (
        <div className='container-fluid'>
            {showPopup && <div className="popup-overlay"></div>}
            <div className="row">
                <div className="col-8">
                    <div className='m-2'>
                        <div className='d-flex justify-content-between'>
                            <h4 className='text-center'>Purchase Method ⇒ </h4>
                            <h4 className='text-center'>⇒Shipping ⇒</h4>
                            <h4 className='text-center'>⇒Payment</h4>
                        </div>
                        <div className='d-flex justify-content-between align-items-center'>
                            <Link to="/" className="btn btn-outline-dark btn-inverse rounded-0"><span title='Continue Shopping'>Continue Shopping</span></Link>
                            <p>* Mandatory Field</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row gap-1'>
                <div className="col-8">
                    <div className="accordion" id="accordionExample">
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button background-primary text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                    1. Purchase Method
                                </button>
                            </h2>
                            <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    {/* <form>
                                        <div className="mb-3">
                                            <label htmlFor="exampleInputEmail1" className="form-label">Email address*</label>
                                            <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                            <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                                        </div>
                                        <button type="submit" className="btn btn-dark rounded-0 btn-buyNow background-secondary">CONTINUE AS GUEST</button>
                                    </form> */}
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed background-primary text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                    2. Shipping Information
                                </button>
                            </h2>
                            <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <form>
                                        <div className="mb-3">
                                            <label className="form-label">Full Name*</label>
                                            <input type="text" className="form-control" onInput={(e) => { setName(e.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Email*</label>
                                            <input type="text" className="form-control" onInput={(e) => { setEmail(e.target.value) }} />
                                        </div>
                                        <div className="mb-3">
                                            <label className="form-label">Phone Number*</label>
                                            <input type="text" className="form-control" onInput={(e) => { setPhone(e.target.value) }} />
                                        </div>
                                        <button type="button" className="btn btn-dark rounded-0 btn-buyNow background-secondary" onClick={pushOrder}>GENERATE ORDER</button>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div className="accordion-item">
                            <h2 className="accordion-header">
                                <button className="accordion-button collapsed background-primary text-black" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                                    3. Payment
                                </button>
                            </h2>
                            <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                                <div className="accordion-body">
                                    <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-3 px-0">
                    <div className='border border-1'>
                        <div className='p-3 background-primary d-flex justify-content-between align-items-center'>
                            <h4 className='mb-0'>Order Summary</h4>
                            <Link to="/cart"><p className='mb-0 text-decoration-underline fs-6 text-black'>Edit</p>  </Link>
                        </div>
                        <div>
                            {cart.map((item) => <CheckoutItem {...item} key={item.id} />)}
                        </div>
                        <div className="background-primary p-3">
                            <h4 className='mb-0'>Order Amount</h4>
                        </div >
                        <div>
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
            </div>
            <div id="popup" style={popupStyle}>
                {showPopup && (
                    <div className="popup">
                        <button className="close-btn" onClick={exitPopup} title='Close'>
                            X
                        </button>
                        <div className="popup-content text-center">
                            <div>
                                <img className="img-fluid logo-casio" src={logoCasio} alt="Casio" />
                            </div>
                            <h1>Thank you for your purchase!</h1>
                            <p>Your Order ID is: <b className='text-primary'>{orderId}</b></p>
                            <p>We have sent an email to <b className='text-primary'>{email}</b> with the details of your purchase.</p>
                            <div>
                                <button className="btn btn-dark rounded-0 btn-buyNow background-secondary" onClick={exitPopup}>CONTINUE SHOPPING</button>
                            </div>
                        </div>
                    </div>
                )}
            </div>

        </div>
    )
}

export default Checkout