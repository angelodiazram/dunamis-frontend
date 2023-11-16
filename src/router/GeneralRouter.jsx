 import { Navigate, Route, Routes } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CarroPage } from "../pages/CarroPage"
import { SignUpPage } from "../pages/SignUpPage"
import { AdminPage } from "../pages/AdminPage"
import { LoginPage } from "../pages/LoginPage"
import { PrivateRoute } from "./PrivateRoute"
import { ShoppingPage } from "../pages/ShoppingPage"
import { CatalogoPage } from "../pages/CatalogoPage"
import { PlannersPage } from "../pages/PlannersPage"
import { CuadernosPage } from "../pages/CuadernosPage"
import { PolerasPage } from "../pages/PolerasPage"


export const GeneralRouter = () => {
    return (
        <>
            <Routes>
                    <Route path="/" element={<HomePage />}/>
                    <Route path="/admin" element={<AdminPage />}/>
                    <Route path="/carro" element={<CarroPage />}/>
                    <Route path="/catalogo" element={<CatalogoPage />}/>
                    <Route path="/login" element={<LoginPage />}/>
                    <Route path="/signup" element={<SignUpPage />}/>
                    <Route path="/planners" element={<PlannersPage />}/>
                    <Route path="/cuadernos" element={<CuadernosPage />}/>
                    <Route path="/poleras" element={<PolerasPage />}/>

                    <Route 
                        path="poleras/*" 
                        element={
                            <PrivateRoute>
                                <ShoppingPage />
                            </PrivateRoute>
                        }
                    />
                    <Route path="*" element={<Navigate to='/login'/>}/>
            </Routes>         
        </>
    )
}