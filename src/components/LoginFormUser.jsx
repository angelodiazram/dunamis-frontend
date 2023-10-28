import { useState } from "react";
import { axiosDunamisBackend } from "../config/dunamisApi";
import { useNavigate } from "react-router-dom";

export const LoginFormUser = () => {

    const navigate = useNavigate();

    // ESTADO INICIAL DEL FORMULARIO
    const initialLoginForm = {
        email: '',
        pass: ''
    }

    const [ LoginForm, setLoginForm ] = useState (initialLoginForm);
    
    // FUNCIÓN PARA MANEJAR EL EVENTO DE LOS INPUTS
    const handleLoginFormChange = (event) => {
        const keyForm = event.target.name;
        const valueForm = event.target.value;

        setLoginForm({
            ...LoginForm,
            [keyForm]: valueForm
        })
    }

    const onSubmitLoginForm = async (event) => {
        event.preventDefault();
        console.log('submit presionado');
        try {
            const {data} = await axiosDunamisBackend.post('/login', LoginForm); 
            console.log('Token generado', data);
    
            const tokenString = JSON.stringify(data)
            localStorage.setItem('token', tokenString);
    
            alert('Inicio de sesión exitoso');
            navigate('/');
        } catch (error) {
            alert('Datos de usuario erroneos, intente nuevamente')
            console.log('No se pudo iniciar sesión')
        }
    }

    return (
        <>
            <form onSubmit={onSubmitLoginForm}>
                <label htmlFor="email">Correo</label>
                <input 
                    type="email" 
                    name="email" 
                    value={LoginForm.email}
                    id="email-login" 
                    onChange={handleLoginFormChange} 
                    required
                />

                <label htmlFor="pass">Contraseña</label>
                <input 
                    type="password" 
                    name="pass"
                    value={LoginForm.pass} 
                    id="pass-login" 
                    onChange={handleLoginFormChange} 
                    required
                />
                <button type="submit">Acceder</button>
            </form>
        </>
    );
};