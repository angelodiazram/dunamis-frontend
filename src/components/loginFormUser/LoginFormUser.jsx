import { useContext, useState } from "react";

import { Link, useNavigate } from "react-router-dom";
import userContext from "../../context/Users/UserContext";

import './loginFormUser.css';

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
            <div id="login-container">
                <div id="title-container">
                    <p id="p-login">Ingresar a</p>    
                    <h2 id="h2-login">Dunamis Papeleria</h2>
                </div>
                <form id="login-form" onSubmit={onSubmitLoginForm}>
                    <label className="label-form" htmlFor="email">Correo</label>
                    <input
                        className="input-form" 
                        type="email" 
                        name="email" 
                        value={loginForm.email}
                        id="email-login" 
                        onChange={handleLoginFormChange} 
                        required
                    />
                
                    <label  className="label-form" htmlFor="pass">Contraseña</label>
                    <input
                        className="input-form" 
                        type="password" 
                        name="pass"
                        value={loginForm.pass} 
                        id="pass-login" 
                        onChange={handleLoginFormChange} 
                        required
                    />
                    <button className="button-form" type="submit">INICIAR SESIÓN</button>
                </form>
            </div>
            <div id="section-logout">
                <div id="logout-container-two">
                    <h4 id="h4-logout">Aún no te registrar en Dunamis Papeleria?</h4>
                    <p id="p-logout-two">Puedes registrarte para que podamos gestionar el envío de tus productos mucho mas rápido! 🚚</p>
                    <button className="button-form">
                        <Link id="link-button" to="/signup">REGISTRARSE</Link>
                    </button>
                </div>
            </div>
        </>
    );
}