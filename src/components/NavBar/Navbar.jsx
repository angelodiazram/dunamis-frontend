import { NavLink } from "react-router-dom";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import './navbar.css';

export const Navbar = () => {
    return (
        <>
            <header id="header-container">
                
                <div id="top-header">
                    <div id="redes-container">
                        <ul id="ul-redes">
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faInstagram} /></NavLink></li>
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faFacebook} /></NavLink></li>
                        </ul>    
                    </div>
                    <div id="logo-container">
                        <NavLink to='/'>
                            <img src="/assets/img/DUNAMIS_LOGO_EDITADO.png" alt="logo-dunamis" id="logo-navbar"/>
                        </NavLink>
                    </div>
                    <div id="cart-user">
                        <ul id="ul-cart">
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faUser} /></NavLink></li>
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faCartShopping} /></NavLink></li>
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faRightToBracket} /></NavLink></li>
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faRightToBracket} rotation={180} /></NavLink></li>
                        </ul>
                    </div>
                </div>
                <div id="main-rutes">
                    <ul id="ul-rutes">
                        <li className="li-rutes">
                            <NavLink to='/' className='link'>Inicio</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/planners' className='link'>Planners</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/cuadernos' className='link'>Cuadernos</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/ropa' className='link'>Ropa</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/about' className='link'>Sobre nosotros</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/cart' className='link'>Catalogo</NavLink>
                        </li>
                    </ul>
                </div>
            </header>
        </>
    );
};