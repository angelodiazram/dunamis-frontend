import { NavLink } from "react-router-dom";
import { useContext } from "react";
import { faFacebook, faInstagram } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faCartShopping, faRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { faUser } from "@fortawesome/free-regular-svg-icons";

import './navbar.css';
import PolerasContext from "../../context/poleras/polerasContext";
import userContext from "../../context/Users/UserContext";

export const Navbar = () => {

    const polerasCtx = useContext(PolerasContext)
    const usersCtx = useContext(userContext);

    const { polerasCart } = polerasCtx;
    const { authStatus, users, logoutUser } = usersCtx;

    return (
        <>
            <header id="header-container">
                <div id="top-header">
                    <div id="redes-container">
                        <ul id="ul-redes">
                                <li className="icons"><a className="top-link" href="https://www.instagram.com/dunamis.papeleria/" target="_blank"><FontAwesomeIcon icon={faInstagram} /></a></li>
                                <li className="icons"><a className="top-link" href="https://web.facebook.com/p/dunamispapeleria-100084159585093/?paipv=0&eav=AfZPvFeHWfo6H2j1FAyrlI6OLv0zj6Ack_8kvJHVBZxQCynt3Xr1vn-kPJY3AEbWdEM&_rdc=1&_rdr" target="_blank"><FontAwesomeIcon icon={faFacebook} /></a></li>
                        </ul>    
                        <div id="sandwitch">
                            <span><FontAwesomeIcon icon={faBars} /></span>
                        </div>
                    </div>
                    <div id="logo-container">
                        <NavLink to='/' id="link-img">
                            <img src="/assets/img/DUNAMIS_LOGO_EDITADO.png" alt="logo-dunamis" id="logo-navbar"/>
                        </NavLink>
                    </div>
                    <div id="cart-user">
                        <ul id="ul-cart">
                            {
                                (authStatus) ?
                                    <>
                                        <li className="icons"><NavLink className="top-link" id="name-user" to='/login'>{users.name}</NavLink></li>
                                        <li className="icons"><NavLink className="top-link" onClick={logoutUser}><FontAwesomeIcon icon={faRightToBracket} /></NavLink></li>
                                    </> :
                                    <>
                                        <li className="icons"><NavLink className="top-link" to='/login'><FontAwesomeIcon icon={faUser} /></NavLink></li>
                                    </>
                            }

                            <li className="icons"><NavLink className="top-link"></NavLink></li>
                            <li className="icons">
                                <NavLink className="top-link" to='/carro'>
                                    <FontAwesomeIcon icon={faCartShopping} />
                                </NavLink>
                                <span id="contador-carrito">{polerasCart.length}</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </header>
            <Navbar id="main-rutes">
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
                </ul>
            </Navbar>
        </>
    );
};