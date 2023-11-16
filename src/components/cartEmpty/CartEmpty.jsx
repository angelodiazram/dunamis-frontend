import { Link } from "react-router-dom";

import './cartEmpty.css';

export const CartEmpty = () => {
    return (
        <>
            <div id="main-container">
                <h2 id="title-cart">Carrito de compra</h2>
                <div id="aviso-container">
                    <p id="p-empty">No has agregado nada al carro, puedes volver a la tienda y seguir mirando</p>
                    <button id="button-empty">
                        <Link id="link-empty" to='/'>Volver a la tienda</Link>
                    </button>
                </div>
            </div>
        </>
    );
};