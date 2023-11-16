import { useContext } from "react";
import { PlannerContext } from "../context/planners/PlannerContext";
import { Cart } from "../components/Cart/Cart";

export const CarroPage = () => {

    const { message } = useContext(PlannerContext);


    return (
        <>
            <Cart />
        </>
    );
};