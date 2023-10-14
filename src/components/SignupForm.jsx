import { useContext, useState } from "react";
import userContext from "../context/Users/UserContext";

export const SignupForm = () => {
    
    const userCtx = useContext(userContext)
    
    const { signupUser } = userCtx;

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
    }

    return (
        <>
            <div>
                <h2 className="text-center">Registrar</h2>
            </div>

            <div className="d-flex justify-content-center align-items-center">
                <form onSubmit={(e) => {onSubmitData(e)}}>
                    <div>
                        <label htmlFor="email"></label>
                        <input type="email" name="email" id="email"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div>
                        <label htmlFor="password"></label>
                        <input type="password" name="password" id="password"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div>
                        <label htmlFor="name"></label>
                        <input type="text" name="name" id="name"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div>
                        <label htmlFor="last_name"></label>
                        <input type="text" name="last_name" id="last_name"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div>
                        <label htmlFor="rut"></label>
                        <input type="text" name="rut" id="rut"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div>
                        <label htmlFor="adress"></label>
                        <input type="text" name="adress" id="adress"onChange={(e) => {onChangeData(e)}} required/>
                    </div>
                    <div className="d-flex justify-content-center align-items-center text-center">
                        <button className="btn btn-primary" type="submit">Registrar</button>
                    </div>
                </form>
            </div>
        </>
    );
};