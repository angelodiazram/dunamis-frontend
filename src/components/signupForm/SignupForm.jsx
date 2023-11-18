import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import userContext from "../../context/Users/UserContext";

import './signupForm.css';

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
        phone: '',
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
            <div id="singup-container">
                <div>
                    <h2 id="h2-signup">Ingresa tu datos</h2>
                </div>
                
                <form id="form-container" onSubmit={(e) => {onSubmitData(e)}}>
                    
                    <label className="label-signup" htmlFor="email">Correo electrónico</label>
                    <input className="input-signup" type="email" name="email" id="email" onChange={(e) => {onChangeData(e)}} required/>
            
                    <label className="label-signup" htmlFor="pass">Contraseña</label>
                    <input className="input-signup" type="password" name="pass" id="password" autoComplete="current-password" onChange={(e) => {onChangeData(e)}} required/>
                
                    <label className="label-signup" htmlFor="name">Nombre</label>
                    <input className="input-signup" type="text" name="name" id="name" onChange={(e) => {onChangeData(e)}} required/>
                
                    <label className="label-signup" htmlFor="last_name">Apellido</label>
                    <input className="input-signup" type="text" name="last_name" id=" last_name" onChange={(e) => {onChangeData(e)}} required/>
                
                    <label className="label-signup" htmlFor="rut">Rut</label>
                    <input className="input-signup" type="text" name="rut" id="rut" onChange={(e) => {onChangeData(e)}} required/>
                    
                    <label className="label-signup" htmlFor="phone">Teléfono</label>
                    <input className="input-signup" type="text" name="phone" id="phone" onChange={(e) => {onChangeData(e)}} required/>
                
                    <label className="label-signup" htmlFor="adress">Dirección</label>
                    <textarea className="area-signup" type="text" name="adress" id="adress" onChange={(e) => {onChangeData(e)}} required/>
            
                    <button className="btn-signup" type="submit"><Link id="link-button" to="/">CONFIRMAR REGISTRO</Link></button>
                </form>
            </div>
        </>
    );
};