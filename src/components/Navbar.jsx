import logoCasio from "./images/new_logo_casio_r_store-min.png";
import iconSearch from "./images/search.svg";
import iconHeart from "./images/heart.svg";
import iconLogin from "./images/login.svg";
import CartWidget from "./CartWidget";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from 'react';

import Typed from 'typed.js'

const Navbar = () => {
  const navigate = useNavigate();
  //Animacion de placeholder en el input de busqueda--------
  const inputRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Search...', 'Digital', 'Analog-Digital', 'Vintage', 'Full Metal', 'Basic', 'Standard', 'BGD-565', 'G-Shock Move'], // Array de textos a mostrar
      showCursor: true, // Mostrar cursor palpitante
      cursorChar: "|", // Caracter del cursor
      typeSpeed: 45,// Velocidad de escritura
      backSpeed: 20,// Velocidad de borrado
      smartBackspace: true,// Borrar solo la parte no escrita
      loop: true, // Repetir la animación en un bucle
      startDelay: 500,// Tiempo de retraso en iniciar la animación. Aplica también cuando termina y vuelve a iniciar
      backDelay: 2000,// Tiempo de espera después de que termina de escribir una palabra
      attr: "placeholder",// Atributo a modificar
      bindInputFocusEvents: true,// Vincular eventos de enfoque de entrada
    };

    const typed = new Typed(inputRef.current, options);
    return () => {
      typed.destroy(); // Destruir la instancia de typed.js al desmontar el componente
    };
  }, []);
  //---------------------------------------------------------
  // Busqueda de productos
  const [searchTerm, setSearchTerm] = useState("");

  const handleInputChange = (e) => {

    setSearchTerm(e.target.value);
  };

  const handleSearch = (e) => {
    e.preventDefault();// Evitar que se recargue la página   
  };


  return (
    <nav className="navbar navbar-expand-lg bg-white">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <div>
            <img className="img-fluid logo-casio" src={logoCasio} alt="Casio" />
          </div>
        </Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <div className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto text-center align-self-center">
            <NavLink to="/category/gshock" className="nav-link  text-black align-self-center" aria-current="page">G-SHOCK</NavLink>
            <NavLink to="/category/watches" className="nav-link  text-black align-self-center">CASIO WATCHES</NavLink>
            <NavLink to="/category/music" className="nav-link  text-black align-self-center">ELECTRONIC MUSICAL INSTRUMENTS</NavLink>
            <NavLink to="/category/calculators" className="nav-link  text-black align-self-center">CALCULATORS</NavLink>
            <NavLink to="/category/medical" className="nav-link  text-black align-self-center">MEDICAL DEVICES</NavLink>
          </div>
          <form className="d-flex" role="search" onSubmit={handleSearch}>
            <input className="form-control me-2 rounded-0 border-top-0  border-start-0 border-end-0 border-bottom-1 placeholder-input search-input" type="search" aria-label="Search"
              ref={inputRef}
              data-typed-placeholder=""
              placeholder=""
              value={searchTerm}
              onChange={handleInputChange} />
            <div className="d-flex justify-content-center">
              <button className="btn" type="submit" onClick={() => navigate(`/search-results?query=${encodeURIComponent(searchTerm.toUpperCase())}`)}><img src={iconSearch} alt="Search" /></button>
              <CartWidget />
              <button className="btn"><img src={iconHeart} alt="Favorites" /></button>
              <button className="btn"><img src={iconLogin} alt="Login" /></button>
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar