import { useContext, useEffect, useState } from "react";
import PolerasContext from "../../context/poleras/polerasContext";

import './cardPolera.css';

export const CardPoleras = () => {

    const globalPolerasContext = useContext(PolerasContext);

    const { getPoleras, polerasCart, setPolerasCart } = globalPolerasContext;
    
    const [poleras, setPoleras] = useState([])

    //* METODO PARA EL BOTON 'AGREGAR AL CARRITO'
    const onAddPolera = ( selectedPolera ) => {
        setPolerasCart([
            ...polerasCart,
            selectedPolera
        ])

        console.log(`llegado la siguiente polera con el SKU: ${selectedPolera.SKU} desde 'onAddPolera'`);
        console.log({
            productos_carrito: polerasCart,
            cantidad: polerasCart.length
        });
    }
    
    //* METODO PARA EL BOTÓN 'COMPRAR'
    const onAddUniquePolera = ( selectedPolera ) => {
        setPolerasCart([selectedPolera]);
        
        console.log(`me ha llegado la siguiente polera con el SKU: ${selectedPolera.SKU} desde 'onAddUniquePolera'`);
        console.log({
            productos_carrito: polerasCart,
            cantidad: polerasCart.length
        });
    }

    const getAllPoleras = async () => {
        const dataPoleras = await getPoleras();
        setPoleras(dataPoleras);
    }


    useEffect(() => {
        getAllPoleras()
        console.log({ message: 'Función getAllPoleras ejecutada para para poder traer los productos y hacer un map()'});
    }, [])

    // console.log({ id_uno: poleras[0]._id }); 


    return (
        <>
            <h2 id="title">Poleras Dunamis</h2>
            <div className="main-container" >
                {
                    poleras.map(polera => (
                        <div className="card-container" key={polera._id}>
                            <div className="img-container">
                                <img src={polera.urlImg} alt={polera.description} />
                            </div>
                            <div className="description-container">
                                <p>{polera.description}</p>
                                <div className="caracteristicas">
                                    <span>Tallas disponibles: {polera.talla}</span>
                                    <span>Color: {polera.color}</span>
                                </div>
                            </div>
                            <div className="precio-button">
                                <p>${polera.precio}</p>
                                <div className="buttons-container">
                                    <button 
                                        className="button-cart"
                                        onClick={() => {onAddPolera(polera)}}
                                    >
                                        Añadir al carrito
                                    </button>
                                    
                                    <button 
                                        className="button-cart"
                                        onClick={() => {onAddUniquePolera(polera)}}
                                    >
                                        Comprar
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </>
    );
};