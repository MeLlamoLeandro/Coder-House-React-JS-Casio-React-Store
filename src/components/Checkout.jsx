import { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { CartContext } from '../context/CartContext'
import { getFirestore, collection, addDoc } from "firebase/firestore";
import CheckoutItem from './CheckoutItem.jsx'
import { ReactComponent as IconQuestion } from "./images/question.svg";
import logoCasio from "./images/new_logo_casio_r_store-min.png";
import sendEmail from '../helpers/EmailJS.jsx';

const Checkout = () => {

    const navigate = useNavigate();
    const { cart, totalItems, totalPrices, clean } = useContext(CartContext);

    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [name, setName] = useState("");
    const [lastName, setLastName] = useState("");
    const [address, setAddress] = useState("");
    const [city, setCity] = useState("");
    const [province, setProvince] = useState("");
    const [country, setCountry] = useState("");
    const [postalCode, setPostalCode] = useState("");

    const [orderId, setOrderId] = useState("");
    const [showPopup, setShowPopup] = useState(false);

    const [validated, setValidated] = useState(false);

    // Validador de formulario de React-Bootstrap
    const handleFormSubmit = (event) => {
        const form = event.currentTarget;
        event.preventDefault()
        event.stopPropagation()
        //valido que el formulario este completo
        if (!form.checkValidity()) {
            console.log('1-invalid form, cant push order')
            setValidated(false)
        } else {
            console.log('2-validated form, proceed to push order')
            setValidated(true);
        }
        form.classList.add('was-validated'); //agrego la clase para que se vea el feedback de validacion
    };


    // Funcion para pushear la orden a firebase
    useEffect(() => {
        console.log('Form Validate State', validated)
        if (validated) {
            const buyer = {
                name: name,
                lastName: lastName,
                email: email,
                phone: phone,
                address: address,
                city: city,
                province: province,
                country: country,
                postalCode: postalCode
            }
            console.log('3- created buyer')

            const items = cart.map((item) => ({ id: item.id, title: item.model, quantity: item.quantity, price: item.price }))
            const total = totalPrices()
            const itemsCount = totalItems()
            const date = new Date().toLocaleDateString()
            const order = { buyer: buyer, items: items, total: total, itemsCount: itemsCount, date: date }
            console.log('4- created order')
            pushOrder(order) //invoco la fx de pushear la orden
            
        }
    }, [validated])

    // Funcion para pushear la orden a firebase
    const pushOrder = (order) => {
        //inserto el documento en firestore
        const db = getFirestore();
        const ordersCollection = collection(db, "orders");
        addDoc(ordersCollection, order).then((docRef) => {
            setOrderId(docRef.id)
            setShowPopup(true) //muestro el popup
            sendEmail(order, docRef.id)//invoco la fx de envio de mail

        }).catch((error) => {
            console.error("Error adding document: ", error);
        });
        console.log('5 - order pushed')
    }


    // Defino stilo para que se haga visible el popup de finalizacion de compra
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
            {cart.length === 0 ?//si el carrito esta vacio y no tengo nada a despachar
                (<div className='d-flex align-items-center flex-column mb-3'><h2 className='text-center text-danger m-5 fs-6'>You have no items to purchase.</h2><Link to="/" className='btn btn-dark rounded-0 btn-buyNow background-secondary mt-2'>Products</Link></div>) :
                (
                    <>
                        <div className="row">
                            <div className="col-8">
                                <div className='m-2'>
                                    <div className='d-flex justify-content-between'>
                                        <h4 className='text-center'>Purchase Method ⇒ </h4>
                                        <h4 className='text-center'>⇒Shipping</h4>
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
                                <form id='form-checkout' className="needs-validation" noValidate onSubmit={handleFormSubmit} >
                                    <div className="" id="">
                                        <div id="stage-1" className='border border-1'>
                                            <div className="background-primary text-black p-10">
                                                <h2 className="stage-header">
                                                    1. Purchase Method
                                                </h2>
                                            </div >
                                            <div >
                                                <div className="stage-body p-10">
                                                    <div className="mb-3">
                                                        <label className="form-label fs-12">Email*</label>
                                                        <input type="email" className="form-control rounded-0" required onInput={(e) => { setEmail(e.target.value) }} />
                                                        <div className="invalid-feedback fs-12">
                                                            Please Enter Email Address
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="stage-2" className='border border-1'>
                                            <h2 className="stage-header">
                                                <div className="background-primary text-black p-10" >
                                                    2. Shipping Information
                                                </div >
                                            </h2>
                                            <div   >
                                                <div className="stage-body p-10">
                                                    <div className="row g-3">
                                                        <div className="col-12">
                                                            <label className="form-label fs-12">Phone Number*</label>
                                                            <input type="number" name='phone' className="form-control rounded-0" id='phone' required onInput={(e) => { setPhone(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter Phone Number
                                                            </div>
                                                        </div>

                                                        <div className="col-sm-6">
                                                            <label className="form-label fs-12">First Name*</label>
                                                            <input type="text" name="firstName" className="form-control rounded-0" id="firstName" required onInput={(e) => { setName(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter First Name
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-6">
                                                            <label className="form-label fs-12">Last Name*</label>
                                                            <input type="text" name="lastName" className="form-control rounded-0" id="lastName" required onInput={(e) => { setLastName(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter Last Name
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="form-label fs-12">Address Line*</label>
                                                            <input type="text" name="address" className="form-control rounded-0" id="address" required onInput={(e) => { setAddress(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter Street
                                                            </div>
                                                        </div>

                                                        <div className="col-12">
                                                            <label className="form-label fs-12">City*</label>
                                                            <input type="text" name="city" className="form-control" id="city" required onInput={(e) => { setCity(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter City
                                                            </div>
                                                        </div>

                                                        <div className="col-md-4">
                                                            <label className="form-label fs-12">State/Province*</label>
                                                            <input type="text" name="province" className="form-control rounded-0" id="province" required onInput={(e) => { setProvince(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter State/Province
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label fs-12">Country*</label>
                                                            <input type="text" name="country" className="form-control rounded-0" id="country" required onInput={(e) => { setCountry(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter Country
                                                            </div>
                                                        </div>
                                                        <div className="col-md-4">
                                                            <label className="form-label fs-12">Zip/Postal Code*</label>
                                                            <input type="text" name="postalCode" className="form-control rounded-0" id="postalCode" required onInput={(e) => { setPostalCode(e.target.value) }} />
                                                            <div className="invalid-feedback fs-12">
                                                                Please Enter Zip/Postal Code
                                                            </div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="form-check">
                                                                <input type="checkbox" name="checkOffer" className="form-check-input rounded-0" id="checkOffer" />
                                                                <label className="form-check-label">Yes, I’d like to receive emails about special offers and new products.</label>
                                                            </div>
                                                        </div>
                                                        <p>Please contact customer service (000) 000-0000 if you are having difficulty in placing the order</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div id="stage-3" className='border border-1'>
                                            <h2 className="stage-header">
                                                <div className=" background-primary text-black p-10">
                                                    3. Payment
                                                </div>
                                            </h2>
                                            <div  >
                                                <div className="stage-body p-3">
                                                    <div className="form-check">
                                                        <input type="checkbox" name="checkPay" className="form-check-input" id="checkPay" required />
                                                        <label className="form-check-label" >Just click to mark as paid*</label>
                                                    </div>
                                                    <hr className='my-2' />
                                                    <p className='text-danger footer-text__disclaimer'>By clicking, I acknowledge that this is not a real website and I am not making any actual purchases. I understand that this website is for educational purposes only.</p>
                                                    <div className='d-flex justify-content-center align-items-center p-10'>
                                                        <button type="submit" className="btn btn-dark rounded-0 btn-buyNow background-secondary fs-14">GENERATE ORDER</button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
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
                        </div >
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
                    </>
                )
            }
        </div >
    )
}

export default Checkout