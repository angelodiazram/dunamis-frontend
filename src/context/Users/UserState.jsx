import { useReducer } from "react";
import { userReducer } from "./UserReducer";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import userContext from './UserContext'

// manejador de estado global para los usuarios
export const UserState = ({children}) => {
    
    // ESTADO POR DEFECTO DEL CONTEXTO GLOBAL PARA LOS USUARIOS
    const userInitialState = {
        users: [
            {
                id: 0,
                email: 'angelodiazram@gmail.com',
                pass: 'angelo9802',
                name: 'Angelo',
                last_name: 'Díaz Ramírez',
                rut: '18740986-1',
                adress: 'Capitan Ignacio Carrera pinto 111b depto 301, ñuñoa'
            }
        ]
    }

    const [globalstate, dispatch] = useReducer(userReducer, userInitialState);
    
    //* METODO GET DESDE EL BACKEN DE DUNAMIS

    const getUser = async () => {
        try {
            //! SIEMPRE LA INFORMACIÓN PROVENIENTRE DE AXIOS LLEGARÁ EN UN OBJETO DE NOMBRE "data"
            const response = await axiosDunamisBackend.get('/usuarios');  //poner solo el final del end point en el get     
            console.log(response.data);

            dispatch({
                type: "OBTENER_USUARIOS_REGISTRADOS",
                payload: response.data
            })
        } catch (error) {
            console.log(error);        
        }
    }


    return (
        <userContext.Provider
            value={{
                userData: globalstate.users,
                getUser
            }}
        >
            {children}
        </userContext.Provider>
    );
};