import { useReducer } from "react";
import { userReducer } from "./UserReducer";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import userContext from './UserContext'

// manejador de estado global para los usuarios
export const UserState = ({ children }) => {
    
    // ESTADO POR DEFECTO DEL CONTEXTO GLOBAL PARA LOS USUARIOS
    const userInitialState = {
        users: [
            {
                id: '',
                email: '',
                pass: '',
                name: '',
                last_name: '',
                rut: '',
                adress: ''
            }
        ],
        authStatus: false
    }

    const [globalstate, dispatch] = useReducer(userReducer, userInitialState);
    
    //* METODO GET PARA OBTENER USUARIOS DESDE EL BACKEND DE DUNAMIS

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

    //* METODO POST PARA LA CRACIÓN DE USUARIOS
    
    const signupUser = async (dataForm) => {
        try {
            const response = await axiosDunamisBackend.post('/usuarios', dataForm)

            dispatch({
                type: "REGISTRAR_USUARIO",
                payload: response.data
            })
        } catch (error) {
            console.log(error)
        }
    }


    return (
        <userContext.Provider
            value={{
                userData: globalstate.users,
                getUser,
                signupUser
            }}
        >
            {children}
        </userContext.Provider>
    );
};