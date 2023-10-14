
export const userReducer = (globalState, action) => {
    
    switch (action.type) {
        case "OBTENER_USUARIOS_REGISTRADOS":
            return {
                ...globalState,
                newUser: action.payload
            }


        default:
            return globalState
    }
}