
export const userReducer = (globalState, action) => {
    
    switch (action.type) {
        case "OBTENER_USUARIOS_REGISTRADOS":
            return {
                ...globalState,
                newUser: action.payload
            }

        case "LOGIN":

            localStorage.setItem('token', action.payload.token)
            return {
                ...globalState,
                authStatus: true
            }

        case "REGISTRAR_USUARIO":
            localStorage.setItem('token', action.payload.token)
            return {
                ...globalState,
                authStatus: true
            }

        case "VERIFICACION_TOKEN":
            return {
                ...globalState,
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
            return globalState
    }
}