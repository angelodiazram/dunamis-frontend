import { useContext, useEffect, useState } from "react";


import { useNavigate } from "react-router-dom";
import userContext from "../context/Users/UserContext";

export const SignupForm = () => {
    
    // variables globales del contexto
    const userCtx = useContext(userContext)

    const navigate = useNavigate()
    
    const { signupUser } = userCtx;
    
    // manejo de variables locales del componente "SignupForm"
    const [ data, setData ] = useState({
        id: '',
        email: '',
        pass: '',
        name: '',
        last_name: '',
        rut: '',
        adress: ''
    })

    const onChangeData = (event) => {
        setData({
            ...data,
            [event.target.name]: event.target.value
        })
    }

    const onSubmitData = (event) => {
        event.preventDefault()
        const user = signupUser(data)
        console.log(user)
        alert('Has sido registrado con Exito')
        navigate('/login')
    }

    return (
        <>
            <div>
                <h2 className="text-center">Registrar</h2>
            </div>

            <div>
                <form onSubmit={(e) => {onSubmitData(e)}}>
                    
                        <label htmlFor="email">Correo electrónico</label>
                        <input type="email" name="email" id="email" onChange={(e) => {onChangeData(e)}} required/>
                
                        <label htmlFor="pass">Contraseña</label>
                        <input type="password" name="pass" id="password" autoComplete="current-password" onChange={(e) => {onChangeData(e)}} required/>
                    
                        <label htmlFor="name">Nombre</label>
                        <input type="text" name="name" id="name" onChange={(e) => {onChangeData(e)}} required/>
                    
                        <label htmlFor="last_name">Apellidos</label>
                        <input type="text" name="last_name" id=" last_name" onChange={(e) => {onChangeData(e)}} required/>
                    
                        <label htmlFor="rut">Rut</label>
                        <input type="text" name="rut" id="rut" onChange={(e) => {onChangeData(e)}} required/>
                    
                        <label htmlFor="adress">Dirección</label>
                        <textarea type="text" name="adress" id="adress" onChange={(e) => {onChangeData(e)}} required/>

                        <button className="btn btn-primary" type="submit">Registrar</button>
                </form>
            </div>
        </>
    );
};