import { useReducer, useState } from "react";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import { polerasReducer } from "./PolerasReducer";
import PolerasContext from './polerasContext';

export const PolerasProvider = ({children}) => {
    
    const poleraInitialState = {
        poleras: [],
        total: 0
    }

    const [polerasCart, setPolerasCart] = useState([]);

    const [cantidades, setCantidades] = useState(1);


    
    const [polerasGlobalState, dispatch] = useReducer(polerasReducer, poleraInitialState)

    const totalCart = (value) => {

        dispatch({
            type: "SET_TOTAL",
            payload: value
        })


    }


    const getPoleras = async () => {
        try {
            const response = await axiosDunamisBackend.get('/poleras');
            // console.log(response.data)

            dispatch({
                type: "OBTENER_POLERAS_TODAS",
                payload: response.data
            })

            return response.data
            
        } catch (error) {
            console.log(error)            
        }
    }
    
    
    return (
        <PolerasContext.Provider
            value={{
                polerasData: polerasGlobalState.poleras,
                getPoleras,
                polerasCart,
                setPolerasCart,
                cantidades,
                setCantidades,
                totalCart,
                totalValue: polerasGlobalState.total
            }}
        >
            {children}
        </PolerasContext.Provider>
    );
};