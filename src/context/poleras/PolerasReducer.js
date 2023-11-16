
export const polerasReducer = (globalState, action) => {
    switch (action.type) {
        case "OBTENER_POLERAS_TODAS":
            return {
                ...globalState,
                newPolera: action.payload
            }

        default:
            return globalState
    }
}