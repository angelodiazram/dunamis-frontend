import { jwtDecode } from "jwt-decode"

export const userReducer = (userGlobalState, action) => {

    switch (action.type) {
        case "OBTENER_USUARIOS":
            return {
                ...userGlobalState, 
                newUser: action.payload 
            }

        case "LOGIN":

            localStorage.setItem('token', action.payload)

            const decodedToken = jwtDecode(action.payload)
            
            return {
                ...userGlobalState,
                authStatus: true,
                user: decodedToken.data
            }

        case "OBTENER_USUARIO":

            return {
                ...userGlobalState,
                authStatus: true,
                userData: action.payload
            }

        case "REGISTRAR_USUARIO":

            localStorage.setItem('token', action.payload)
            
            return {
                ...userGlobalState,
                authStatus: true
            }

        case "VERIFICACION_TOKEN":
            return {
                ...userGlobalState,
                authStatus: true,
                userData: action.payload
            }

        case "CERRAR_SESION":
            localStorage.removeItem('token')

            return {
                userData: '',
                authStatus: false
            }

        default:
            
            return userGlobalState
    }      
}