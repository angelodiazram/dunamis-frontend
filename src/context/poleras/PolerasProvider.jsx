import { useReducer, useState } from "react";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import { polerasReducer } from "./PolerasReducer";
import PolerasContext from './polerasContext';

export const PolerasProvider = ({children}) => {
    
    const poleraInitialState = {
        poleras: []
    }

    const [polerasCart, setPolerasCart] = useState([]);
    
    const [polerasGlobalState, dispatch] = useReducer(polerasReducer, poleraInitialState)
    
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
                setPolerasCart
            }}
        >
            {children}
        </PolerasContext.Provider>
    );
};