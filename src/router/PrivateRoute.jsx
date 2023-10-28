import { useContext, useEffect } from "react";
import userContext from "../context/Users/UserContext";
import { Navigate } from "react-router-dom";

export const PrivateRoute = ({children}) => {
    
    const userCtx = useContext(userContext);
    const { authStatus, verifyToken } = userCtx;
    
    const [ loading, setLoading ] = useState(true);
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                await verifyToken();
                setLoading(false);
            } catch (error) {
                console.error('Error al verificar el token', error);
                setLoading(false);
            }
        };

        fetchData();
    }, [ authStatus, verifyToken ]);

    if (loading) {
        return null;
    }

    return (
        <>
            {
                authStatus ? (<>{children}</>) : (<Navigate to='/login' replace/>)
            }
        </>
    );
};