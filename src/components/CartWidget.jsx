import { Link } from "react-router-dom";
import iconCart from "./images/cart.svg";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";

const CartWidget = () => {
    const { totalItems } = useContext(CartContext);

    return (
        <div>
            <Link to="/Cart" className="btn btn-light position-relative">
                <img src={iconCart} alt="Cart" width="24" />
                {totalItems()>0&&<span id="carrito" className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark">{totalItems()}</span>}
            </Link>
        </div>
    );
};

export default CartWidget