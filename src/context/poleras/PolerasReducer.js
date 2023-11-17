
export const polerasReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_POLERAS_TODAS":
            return {
                ...globalState,
                newPolera: action.payload
            }

        case "SET_TOTAL":
            return {
                ...globalState,
                total: action.payload
            }
            
        default:
            return globalState
    }
}