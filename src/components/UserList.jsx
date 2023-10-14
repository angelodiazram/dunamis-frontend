import { useContext, useEffect } from "react";
import userContext from "../context/Users/UserContext";

export const UserList = () => {
    
    /*
    el hook useContext trae el estado global que necesitemos utilizar para luego almacenarlo
    en una variable para poder utilizar sus metodos
    */
   const globalUserContext = useContext(userContext);
   
   const { userData, getUser } = globalUserContext;
   
   useEffect(() => {
       getUser()
   }, [])

    return (
        <>
            <h2>Lista de usuarios registrados</h2>
            {/* 
            se recorre el objeto users proveniente del estado global con un map
            para poder utilizar esa información 
            */}
            {
                userData.map(user => {
                    return (
                        <div key={user.id}>
                            <h2></h2>
                            <ul>
                                <li>Correo: {user.email}</li>
                                <li>Contraseña: {user.pass}</li>
                                <li>Nombre: {user.name}</li>
                                <li>Apellidos: {user.last_name}</li>
                                <li>Rut: {user.rut}</li>
                                <li>Dirección: {user.adress}</li>
                            </ul>
                        </div>
                    )
                })
            }
        </>
    );
};