import { Link } from 'react-router-dom';
import './products.css';


export const Products = () => {
    return (
        <>
            <div id='main-container'>
                <h2>Algunos de nuestros productos</h2>
                <div className='article-product'>
                    <div className='img-container'>
                        <img src="assets/img/PLANNER_DUNAMIS.png" alt="Planners"/>
                    </div>
                    <div className='description-container'>
                        <h3>Planners</h3>
                        <p>Planifica con Dunamis Papeleria 📒</p>
                        <Link to='/planners'>
                            <button>VER LOS PLANNERS DE DUNAMIS</button>
                        </Link>
                    </div>
                </div>
                <div className='article-product'>
                    <div className='img-container'>
                        <img src="assets/img/CUADERNO_DUNAMIS.png" alt="Cuadernos"/>
                    </div>
                    <div className='description-container'>
                        <h3>Cuadernos</h3>
                        <p>Plasma tus ideas con Dunamis Papeleria 📙</p>
                        <Link to='/cuadernos'>
                            <button>VER LOS CUADERNOS DE DUNAMIS</button>
                        </Link>
                    </div>
                </div>
                <div className='article-product'>
                    <div className='img-container'>
                        <img src="assets/img/POLERON_DUNAMIS.png" alt="Poleras"/>
                    </div>
                    <div className='description-container'>
                        <h3>Poleras</h3>
                        <p>Viste a la moda con Dunamis Papeleria 👕</p>
                        <Link to='/poleras'> 
                            <button>VER LAS POLERAS DE DUNAMIS</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};