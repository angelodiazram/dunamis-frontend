import userContext from "./UserContext";

// manejador de estado global para los usuarios
export const UserState = ({children}) => {
    
    // ESTADO POR DEFECTO DEL CONTEXTO GLOBAL PARA LOS USUARIOS
    const userInitialState = {
        users: [
            {
                id: 0,
                email: 'angelodiazram@gmail.com',
                pass: 'angelo9802',
                name: 'Angelo',
                last_name: 'Díaz Ramírez',
                rut: '18740986-1',
                adress: 'Capitan Ignacio Carrera pinto 111b depto 301, ñuñoa'
            }
        ]
    }
    
    return (
        <userContext.Provider
            value={{userInitialState}}
        >
            {children}
        </userContext.Provider>
    );
};