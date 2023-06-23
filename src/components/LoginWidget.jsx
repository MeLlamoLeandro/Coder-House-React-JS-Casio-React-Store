import iconLogin from "./images/login.svg";
import iconLoginOk from "./images/login-ok.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";



const LoginWidget = () => {
    const { login, logout ,userEmail} = useContext(LoginContext);

    return (
        <div className="nav-login__widget">
            <div className="dropdown dropstart">
                <button className="btn dropdown-toggle rounded-0 position-relative" data-bs-toggle="dropdown" aria-expanded="false">
                    <img src={iconLogin} alt="Login" />
                    {login && <span className="position-absolute top-25 start-75 translate-middle"><img src={iconLoginOk} alt="LoginOk"  className="m-0 p-0" /></span>}
                </button>
                {!login ? (
                    <ul className="dropdown-menu rounded-0">
                        <div className="d-flex justify-content-center align-items-center">
                            <li><Link to="/login" className="btn btn-dark btn-buyNow background-secondary rounded-0 px-5">LOG IN</Link></li>
                        </div>
                        <li><Link to="/register" className="dropdown-item fs-12">JOIN US</Link></li>
                    </ul>
                ) : (
                    <ul className="dropdown-menu rounded-0">
                        <li><p className="fs-12 m-3">Signed as <p className="text-primary">{userEmail}</p></p></li>
                        <li><Link to="/" className="dropdown-item fs-12">Order History</Link></li>
                        <li><button className="dropdown-item fs-12" onClick={logout}>Sign Out</button></li>
                    </ul>
                )}
            </div>
        </div>
    )
}

export default LoginWidget