
export const userReducer = (globalState, action) => {
    
    switch (action.type) {
        case "OBTENER_USUARIOS_REGISTRADOS":
            return {
                ...globalState,
                newUser: action.payload
            }
        
        case "REGISTRAR_USUARIO":
            localStorage.setItem('token', action.payload.token)
            return {
                ...globalState,
                authStatus: true
            }

        default:
            return globalState
    }
}