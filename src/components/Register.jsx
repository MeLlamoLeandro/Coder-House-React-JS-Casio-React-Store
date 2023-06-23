import { Link } from "react-router-dom"
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { LoginContext } from "../context/LoginContext";

const Register = () => {
  const navigate = useNavigate();
  const { login } = useContext(LoginContext);
  if (login) {
    navigate(-1);
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

  return (
    <div className="container-fluid">
      <div className="row">
        <main>
          <div className="container-fluid">
            <div className="row">
              <div className="col-12 col-md-6 offset-md-3 mb-3">
                <h1 className="login-title" >Register on <span className="blue-casio">CASIO REACT STORE ID</span></h1>
                <p className="">Register with email address</p>
                <form id='form-login' /* className="needs-validation" noValidate */ onSubmit={createUser}>
                  <div className="mb-3">
                    <label htmlFor="email" className="form-label fs-12">Email address</label>
                    <input type="email" className="form-control fs-12" id="email" aria-describedby="emailHelp" placeholder="example@casio.com" required />
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                  </div>
                  <div className="mb-3">
                    <label htmlFor="password" className="form-label fs-12">Password</label>
                    <input type="password" className="form-control fs-12" id="password" placeholder="Password" required />
                  </div>
                  <div className="mb-3">
                    <Link to="/login" className="blue-casio">Already a Member? Log in here</Link>
                  </div>
                  <button type="submit" className="btn btn-dark background-secondary rounded-0 btn-buyNow px-5">Create an Account</button>
                </form>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  )
}

export default Register