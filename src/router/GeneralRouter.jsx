import { Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CarroPage } from "../pages/CarroPage"
import { SignUp } from "../pages/SignUpPage"
import { AdminPage } from "../pages/AdminPage"

export const GeneralRouter = () => {
    return (
        <>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/catalogo" element={<CarroPage />}/>
                <Route path="/carro" element={<CarroPage />}/>
                <Route path="/signup" element={<SignUp/>}/>
                <Route path="/admin" element={<AdminPage/>}/>
            </Routes>
        </>
    )
}