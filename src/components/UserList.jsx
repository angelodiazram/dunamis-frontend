import { useContext, useEffect, useState } from "react";
import userContext from "../context/Users/UserContext";

export const UserList = () => {
    
    const globalUserContext = useContext(userContext);
    
    const [usuarios, setUsuarios] = useState(['este es un arreglo vacio']);
    /*
    el hook useContext trae el estado global que necesitemos utilizar para luego almacenarlo
    en una variable para poder utilizar sus metodos
    */
   
    const { getUsers } = globalUserContext;
    
    const getAllUsers = async () => {
        const dataUsers = await getUsers();
        // console.log(dataUsers);
        setUsuarios(dataUsers);
    }


    console.log('Porfin están llegando los usuarios!!!:', usuarios);

    useEffect(() => {
        getAllUsers()
    }, [])

    return (
        <>
            <h2>Lista de usuarios registrados</h2>
            {/* 
            se recorre el objeto users proveniente del estado global con un map
            para poder utilizar esa información 
            */}
            {
                usuarios.map(usuario => (
                    <div key={usuario.id}>
                        <h2>{usuario.name}</h2>
                        <ul>
                            <li>Correo: {usuario.email}</li>
                            <li>Contraseña: {usuario.pass}</li>
                            <li>Nombre: {usuario.name}</li>
                            <li>Apellidos: {usuario.last_name}</li>
                            <li>Rut: {usuario.rut}</li>
                            <li>Rut: {usuario.phone}</li>
                            <li>Dirección: {usuario.adress}</li>
                        </ul>
                    </div>
                ))
            }
        </>
    );
};