import { useReducer } from "react";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import { polerasReducer } from "./PolerasReducer";
import PolerasContext from './polerasContext';

export const PolerasState = () => {
    
    const poleraInitialState = {
        poleras: [
            {
                id: 0,
                color: '',
                talla: '',
                precio: '',
                SKU: 0
            }
        ]
    }
    
    const [globalstate, dispatch] = useReducer(polerasReducer, poleraInitialState)
    
    const getPoleras = async () => {
        try {
            const response = await axiosDunamisBackend.get('/poleras');
            console.log(response.data)

            dispatch({
                type: "OBTENER_POLERAS_TODAS",
                payload: response.data
            })
        } catch (error) {
            console.log(error)            
        }
    }
    
    
    return (
        <PolerasContext.Provider
            value={{
                polerasData: globalstate.poleras,
                getUser
            }}
        >
            
        </PolerasContext.Provider>
    );
};