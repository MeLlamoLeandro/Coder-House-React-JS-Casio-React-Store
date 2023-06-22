import { Link } from "react-router-dom"
import logoCasio from "./images/new_logo_casio_r_store-min.png";
import { getAuth, createUserWithEmailAndPassword ,signInWithEmailAndPassword} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Login = () => {
  const navigate = useNavigate();
  const {login} = useContext(LoginContext);
  if (login) {
    navigate("/");
  }
  //creo un login para que el usuario pueda ingresar a su cuenta
  //se le pide el email y la contraseña
  //se le da la opcion de recuperar la contraseña
  //se le da la opcion de crear una cuenta

  const createUser = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        // ...
        console.log(user);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..

        console.log(errorCode, errorMessage);
        alert(errorCode, errorMessage);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        // Signed in 
        const user = userCredential.user;
        console.log(user);
        // ...
        alert('User loged in, welcome!');
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
        alert(errorCode, errorMessage);
      });
  }

  return (
    <div className="container-fluid">
      <div className="row">
        <header className="login-header col-12">
          <Link to="/"><img className="img-fluid logo-casio" src={logoCasio} alt="Casio" /></Link>
        </header>
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 mb-3">
                <h1 className="login-title">Log In to CASIO ID</h1>
                <form id='form-login' /* className="needs-validation" noValidate */ onSubmit={handleSubmit}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-12">Email address</label>
                    <input type="email" className="form-control fs-12" id="email" aria-describedby="emailHelp" placeholder="example@casio.com" required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fs-12">Password</label>
                    <input type="password" className="form-control fs-12" id="password" placeholder="Password" required/>
                  </div>
                  <div className="mb-3">
                    <Link to="/forgot-password">Forgot your password?</Link>
                  </div>
                  <button type="submit" className="btn btn-dark background-secondary rounded-0 btn-buyNow px-5">LOG IN</button>
                </form>
                <div className="mt-3">
                  {/* <Link to="/register">Not a Member Yet? Create an Account</Link> */}
                  <button className="btn btn-dark" onClick={createUser}>Create an Account</button>
                </div>
              </div>
            </div>
          </div>


        </main>
      </div>
    </div>
  )
}

export default Login