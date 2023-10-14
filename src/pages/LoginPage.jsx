import { useState } from "react";

export const LoginPage = () => {
    
    const [ email, setEmail ] =useState('');
    const [ pass, setPass ] =useState('');
    
    
    return (
        <>
            <form>
                <label>Correo</label>
                <input type="email" />
                <label>Contraseña</label>
                <input type="password" />
                <button type="submit">Acceder</button>
            </form>
        </>
    );
};