import { useContext, useEffect } from "react";
import PolerasContext from "../context/poleras/polerasContext";

export const PolerasList = () => {
    
    const globalPolerasContext = useContext(PolerasContext)

    const { getPoleras } = globalPolerasContext;    
    
    useEffect(() => {
        getPoleras()
    }, [])

    return (
        <>
            <h2>Lista de poleras para la venta</h2>
        </>
    );
};