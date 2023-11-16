import { CuadernoContext } from "./CuadernoContext";


export const CuadernoProvider = ({ children }) => {
    return (
        <CuadernoContext.Provider
            value={{
                message: 'Este es el proveedor para los cuadernos'
            }}
        >
            
        </CuadernoContext.Provider>
    );
};