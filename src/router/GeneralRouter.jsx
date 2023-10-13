import { Route, Router } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { CarroPage } from "../pages/CarroPage"

export const GeneralRouter = () => {
    return (
        <>
            <Router>
                <Route path="/" element={<HomePage />}/>
                <Route path="/catalogo" element={<CarroPage />}/>
                <Route path="/carro" element={<CarroPage />}/>
                <Route path="/carro" element={<CarroPage />}/>
            </Router>
        </>
    )
}