import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CarroPage } from "../pages/CarroPage"
import { SignUpPage } from "../pages/SignUpPage"
import { AdminPage } from "../pages/AdminPage"
import { LoginPage } from "../pages/LoginPage"



export const GeneralRouter = () => {
    return (
        <>
                <Routes>
                        <Route path="/" element={<HomePage />}/>
                        <Route path="/admin" element={<AdminPage />}/>
                        <Route path="/carro" element={<CarroPage />}/>
                        <Route path="/login" element={<LoginPage />}/>
                        <Route path="/signup" element={<SignUpPage />}/>
                </Routes>         
        </>
    )
}