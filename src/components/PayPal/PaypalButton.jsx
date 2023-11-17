import { PayPalButtons } from "@paypal/react-paypal-js";
import PolerasContext from "../../context/poleras/polerasContext";
import { useContext } from "react";

export const PaypalButton = ({invoice}) => {
    
    const { totalValue } = useContext(PolerasContext);

    
    
    
    return (
        <PayPalButtons 
            createOrder = {(data, actions) => {

                return actions.order.create({
                    purchase_units: [
                        {
                            description: invoice,
                            amount: {
                                value: totalValue
                            }
                        }
                    ]
                })
            }}

            onApprove = { async (data, actions) => {
                const order = await actions.order?.capture();
                console.log(order);
            }}
        />
    );
};