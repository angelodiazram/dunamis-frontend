import { useContext, useEffect, useState } from "react";
import PolerasContext from "../../context/poleras/polerasContext";
import { PayPalButtons } from "@paypal/react-paypal-js";

import './cart.css';
import { CartEmpty } from "../cartEmpty/CartEmpty";

export const Cart = () => {
    
    const polerasCtx = useContext(PolerasContext);

    const { polerasCart } = polerasCtx;
    const [total, setTotal] = useState(0);
    
    
    useEffect(() => {
        const totalPriceUSD = polerasCart.reduce((acumulador, actualValue) => {
            const priceUSD = parseFloat(actualValue.precio);
            return acumulador + priceUSD;
        }, 0)

        setTotal(totalPriceUSD);
    }, [polerasCart]);

    if (total <= 0) {
        return (
            <>
                <CartEmpty />
            </>
        )
    }

    
    return (
        <>
            <h2>Carrito de compras</h2>
            <ul>
                {
                    polerasCart.map( poleraCart => (
                        <li key={poleraCart._id}>
                            {`${poleraCart.description} - $${poleraCart.precio}`}
                        </li>
                    ))
                }
            </ul>

            <p>
                Total, a pagar: ${total.toFixed(2)} USD
            </p>

            <PayPalButtons 
                invoice = {'Detalle de la compra'}
                totaValue = {total.toFixed(2)}
                
            />
        </>
    );
};