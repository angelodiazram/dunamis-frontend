import { useReducer } from "react";
import { userReducer } from "./UserReducer";

import { axiosDunamisBackend } from "../../config/dunamisApi";
import userContext from "./UserContext";



//! manejador de estado global para los usuarios
export const UserProvider = ({ children }) => {

    //! ESTADO INICIAL DEL REDUCER
    const userInitialState = {
        user: null,
        authStatus: false
    }

    const [ userGlobalState, dispatch ] = useReducer(userReducer, userInitialState);

    // console.log('lista de usuarios', usuarios);
    // const reducer = userReducer(userInitialState);
    // console.log(reducer);
    
    //! METODO GET PARA OBTENER USUARIOS DESDE EL BACKEND DE DUNAMIS
    const getUsers = async () => {
        try {
            //! SIEMPRE LA INFORMACIÓN PROVENIENTRE DE AXIOS LLEGARÁ EN UN OBJETO DE NOMBRE "data"
            const response = await axiosDunamisBackend.get('/usuarios');  //poner solo el final del end point en el get     
            // console.log('Lista de usuarios hasta el momento', response.data);
            console.log({message: 'Usuarios registrados desde el backend', usuarios: response.data});
            
            dispatch({
                type: "OBTENER_USUARIOS",
                payload: response.data
            })

            return response.data

        } catch (error) {
            console.log(error);        
        }
    }

    //! METODO POST PARA LA CRACIÓN DE USUARIOS 
    const signupUser = async (dataForm) => {
        try {
            const response = await axiosDunamisBackend.post('/usuarios', dataForm)
            console.log(response.data)
            
            dispatch({
                type: "REGISTRAR_USUARIO",
                payload: response.data,
            })
        } catch (error) {
            console.log(error)
        }
    }

    //! METODO LOGIN PARA USUARIOS
    const loginUser = async(dataForm) => {
        try {
            const response = await axiosDunamisBackend.post('/login', dataForm)

            // console.log({
            //     token: response.data,
            //     authStatus: userGlobalState.authStatus,
            //     loginUser: dataForm
            // });

            console.log(response.data);

            dispatch({
                type: "LOGIN",
                payload: response.data
            })

        } catch (error) {
            console.log(error)
        }

    }

    const verifyToken = async () => {
        const token = localStorage.getItem('token');

        if (token) {
            axiosDunamisBackend.defaults.headers.common['authorization'] = token
        } else {
            delete axiosDunamisBackend.defaults.headers.common['authorization']
        }

        const response = await axiosDunamisBackend.get('/verify-token')

        dispatch({
            type: "OBTENER_USUARIO",
            payload: response.data
        })

        return response.data
    }

    //!  METODO PARA CERRAR SESIÓN

    const logoutUser = async () => {
        dispatch({
            type: "CERRAR_SESION"
        })
    }

    return (
        <userContext.Provider
            value={{
                users: userGlobalState.user,
                authStatus: userGlobalState.authStatus,
                getUsers,
                signupUser,
                loginUser,
                logoutUser,
                verifyToken
            }}
        >
            {children}
        </userContext.Provider>
    );
};