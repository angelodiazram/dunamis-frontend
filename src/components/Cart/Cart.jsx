import { useContext, useEffect, useState } from "react";
import PolerasContext from "../../context/poleras/polerasContext";

import { CartEmpty } from "../cartEmpty/CartEmpty";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { PaypalButton } from "../PayPal/PaypalButton";

import './cart.css';

export const Cart = () => {

    const polerasCtx = useContext(PolerasContext);

    const { polerasCart, cantidades, setCantidades, totalCart } = polerasCtx;
    const [total, setTotal] = useState(0);


    
    const establecerPrecio = () => {
        const totalPriceUSD = polerasCart.reduce((acumulador, actualValue) => {
            const priceUSD = parseFloat(actualValue.precio);
            const cantidad = cantidades[actualValue._id] || 1;
            return acumulador + priceUSD * cantidad;
        }, 0)
        
        console.log(totalPriceUSD);
        setTotal(totalPriceUSD);
        totalCart(totalPriceUSD);
    }
    
    useEffect(() => {
        establecerPrecio();

    }, [polerasCart, cantidades]);

    const onDeleteProductCart = (id) => {
        console.log(id)
        const updatedCart = polerasCart.filter(polera => polera._id !== id);

        polerasCtx.setPolerasCart(updatedCart);
    }

    if (total <= 0) {
        return (
            <>
                <CartEmpty />
            </>
        )
    }

    const onHandleRest = (id) => {
        // Lógica para disminuir la cantidad, sin que baje de 1
        const nuevaCantidad = Math.max(1, cantidades[id] - 1);
        setCantidades({ 
            ...cantidades, 
            [id]: nuevaCantidad });
    }
    
    const onHandleAdd = (id) => {
        // Lógica para aumentar la cantidad
        const nuevaCantidad = (cantidades[id] || 0) + 1;
        setCantidades({ 
            ...cantidades, 
            [id]: nuevaCantidad });
    }

    return (
        <div id="cart-container">
            <h2 id="title-carro">Carrito de compras</h2>
            <div id="cart-table">
                <div className="header-table">
                    <ul id="header-ul">
                        <li className="header-li li-one">Producto</li>
                        <li className="header-li li-two">Precio unitario</li>
                        <li className="header-li li-four">Cantidad</li>
                        <li className="header-li li-three">Quitar</li>
                    </ul>
                </div>
                <div id="body-table">
                    {
                        polerasCart.map(polera => (
                            <ul key={polera._id} className="body-ul">
                                <li className="body-li li-one" id="">
                                    <img src={polera.urlImg} alt={polera.description} />
                                    <span>{polera.description}</span>
                                </li>
                                <li className="body-li li-two">$ {polera.precio}</li>
                                <li className="body-li li-four">
                                    <div className="contador">
                                        <button
                                            className="button-rest button-count"
                                            onClick={() => onHandleRest(polera._id)}
                                        >
                                            -
                                        </button>
                                        <span className="count">{cantidades[polera._id] || 1}</span>
                                        <button
                                            className="button-add button-count"
                                            onClick={() => onHandleAdd(polera._id)}
                                        >
                                            +
                                        </button>
                                    </div>
                                </li>
                                <li className="body-li li-three">
                                    <button
                                        onClick={() => { onDeleteProductCart(polera._id) }}
                                    >
                                        <FontAwesomeIcon icon={faTrash} />
                                    </button>
                                </li>
                            </ul>
                        ))
                    }
                </div>
                <p id="p-total">
                    Total, a pagar: <span>${total} CLI</span> 
                </p>
            </div>

            <PaypalButton
                invoice={'Detalle de la compra'}
                
            />
        </div>
    );
};