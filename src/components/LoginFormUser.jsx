import { useContext, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";
import userContext from "../context/Users/UserContext";

export const LoginFormUser = () => {

    const navigate = useNavigate();

    const userCtx = useContext(userContext);
    const { loginUser } = userCtx;

    // ESTADO INICIAL DEL FORMULARIO
    const initialLoginForm = {
        email: '',
        pass: ''
    }

    const [ loginForm, setLoginForm ] = useState (initialLoginForm);
    
    // FUNCIÓN PARA MANEJAR EL EVENTO DE LOS INPUTS
    const handleLoginFormChange = (event) => {
        const keyForm = event.target.name;
        const valueForm = event.target.value;

        setLoginForm({
            ...loginForm,
            [keyForm]: valueForm
        })
    }

    const onSubmitLoginForm = (event) => {
        event.preventDefault();
        loginUser(loginForm)

        console.log('submit presionado'); 
        // alert('Inicio de sesión exitoso');
        navigate('/');
    }

    return (
        <>
            <form onSubmit={onSubmitLoginForm}>
                <label htmlFor="email">Correo</label>
                <input 
                    type="email" 
                    name="email" 
                    value={loginForm.email}
                    id="email-login" 
                    onChange={handleLoginFormChange} 
                    required
                />

                <label htmlFor="pass">Contraseña</label>
                <input 
                    type="password" 
                    name="pass"
                    value={loginForm.pass} 
                    id="pass-login" 
                    onChange={handleLoginFormChange} 
                    required
                />
                <button type="submit">Acceder</button>
            </form>
        </>
    );
}