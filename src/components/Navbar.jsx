import logoCasio from "./images/new_logo_casio_r_store-min.png";
import iconSearch from "./images/search.svg";
import iconHeart from "./images/heart.svg";
import iconLogin from "./images/login.svg";
import CartWidget from "./CartWidget";
import { Link, NavLink } from "react-router-dom";
import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';


const Navbar = () => {
  const inputRef = useRef(null);
  useEffect(() => {
    const options = {
      strings: ['Search...', 'Best Sellers', 'G-Shock 40th', 'Electronic Musical Instruments', 'Calculators'], // Array de textos a mostrar
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

  return (
    <nav className="navbar navbar-expand-lg bg-white sticky-top">
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
          <div className="navbar-nav me-auto mb-2 mb-lg-0 mx-auto">
            <NavLink to="/category/gshock" className="nav-link " aria-current="page">G-SHOCK</NavLink>
            <NavLink to="/category/watches" className="nav-link">CASIO WATCHES</NavLink>
            <NavLink to="/category/music" className="nav-link">ELECTRONIC MUSICAL INSTRUMENTS</NavLink>
            <NavLink to="/category/calculators" className="nav-link">CALCULATORS</NavLink>
            <NavLink to="/category/medical" className="nav-link">MEDICAL DEVICES</NavLink>
          </div>
          <form className="d-flex" role="search">
            <input className="form-control me-2 rounded-0 border-top-0  border-start-0 border-end-0 border-bottom-1 placeholder-input" type="search" aria-label="Search" ref={inputRef} data-typed-placeholder="" placeholder="" />
            <div className="d-flex justify-content-center">
              <img src={iconSearch} alt="Search" />
              <CartWidget />
              <img src={iconHeart} alt="Favorites" />
              <img src={iconLogin} alt="Login" />
            </div>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default Navbar