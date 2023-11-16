export const plannerReducer = (state, action) => {

    switch (action.type) {
        case "OBTENER_PLANNERS":
            return {
                ...state,
                newPlanner: action.type
            }
            
        default:
            return state;
    }

}