import { NavLink } from "react-router-dom";
import { useContext, useEffect } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import './navbar.css';
import PolerasContext from "../../context/poleras/polerasContext";
import userContext from "../../context/Users/UserContext";

export const Navbar = () => {

    const polerasCtx = useContext(PolerasContext)

    const { polerasCart } = polerasCtx;

    const usersCtx = useContext(userContext);

    const { authStatus, users } = usersCtx;

    useEffect( () => {
        console.log({
            authStatus: authStatus
        })
    }, [])

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

                            {
                                (authStatus) && `nombre usiario: ${users.name}`
                            }
                            <li className="icons">
                                <li className="icons"><NavLink className="top-link" to='/login'><FontAwesomeIcon icon={faUser} /></NavLink></li>
                                <NavLink className="top-link" to='/carro'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </NavLink>
                                <span id="contador-carrito">{polerasCart.length}</span>
                            </li>
                            {/* <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faRightToBracket} /></NavLink></li>
                            <li className="icons"><NavLink className="top-link"><FontAwesomeIcon icon={faRightToBracket} rotation={180} /></NavLink></li> */}
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
                            <NavLink to='/poleras' className='link'>Poleras</NavLink>
                        </li>
                        <li className="li-rutes">
                            <NavLink to='/about' className='link'>Sobre nosotros</NavLink>
                        </li>
                        {/* <li className="li-rutes">
                            <NavLink to='/cart' className='link'>Catalogo</NavLink>
                        </li> */}
                    </ul>
                </div>
            </header>
        </>
    );
};