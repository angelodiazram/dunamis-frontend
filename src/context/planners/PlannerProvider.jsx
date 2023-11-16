import { useReducer } from "react";
import { PlannerContext } from "./PlannerContext";
import { axiosDunamisBackend } from "../../config/dunamisApi";
import { plannerReducer } from "./plannerReducer";

export const PlannerProvider = ({ children }) => {
    
    //! ESTADO INICIAL
    const plannerInitialState = {
        planners: [],
    }
    
    const [plannerGlobalState, dispatch] = useReducer(plannerReducer, plannerInitialState);

    const getPlanners = async () => {
        try {
            const response = await axiosDunamisBackend.get('/planners');

            console.log({ message: 'Planners disponibles', Planners: response.data});

            dispatch({
                type: "OBTENER_PLANNERS",
                payload: response.data
            })

            return response.data;

        } catch (error) {
            console.log(error);
        }
    }



    return (
        <PlannerContext.Provider
            value={{
                message: 'Este es el proveedor del planner para la app',
                planners: plannerGlobalState
            }}
        >
            {children}
        </PlannerContext.Provider>
    );
};