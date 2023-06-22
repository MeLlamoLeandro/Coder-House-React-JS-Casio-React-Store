import iconLogin from "./images/login.svg";
import iconLoginOk from "./images/login-ok.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";


const LoginWidget = () => {
    const { login, logout } = useContext(LoginContext);

    return (
        <div className="nav-login__widget">
            <div className="dropdown dropstart">
                <button className="btn dropdown-toggle rounded-0 position-relative" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={iconLogin} alt="Login" />
                    {login && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-dark"><img src={iconLoginOk} alt="LoginOk" /></span>}
                </button>
                <ul className="dropdown-menu rounded-0">
                    <div className="d-flex justify-content-center align-items-center">
                        <li><Link to="/login" className="btn btn-dark btn-buyNow background-secondary rounded-0 px-5">LOG IN</Link></li>
                    </div>
                    <li><Link to="/" className="dropdown-item fs-12">Order History</Link></li>
                    <li><button className="dropdown-item fs-12" onClick={logout}>Sign Out</button></li>
                </ul>
            </div>
        </div>
    )
}

export default LoginWidget