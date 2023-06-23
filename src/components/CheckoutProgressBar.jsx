

const CheckoutProgressBar = ({ stage }) => {
 
    return (
        <div className="d-flex justify-content-between mb-2 text-center sticky-top">
            <div className={`${stage >= 1 ? 'checkout-progress-bar--active' : 'checkout-progress-bar'} d-block`}>
                <div className="checkout-progress-bar__circle ">1</div>
                <div className="checkout-progress-bar__text">Purchase Method </div>
            </div>
            <div className={`${stage >= 2 ? 'checkout-progress-bar--active' : 'checkout-progress-bar'} d-block`}>
                <div className="checkout-progress-bar__circle">2</div>
                <div className="checkout-progress-bar__text">Shipping</div>
            </div>
            <div className={`${stage === 3 ? 'checkout-progress-bar--active' : 'checkout-progress-bar'} d-block`}>
                <div className="checkout-progress-bar__circle">3</div>
                <div className="checkout-progress-bar__text">Payment</div>
            </div>
        </div >
    )
}

export default CheckoutProgressBar