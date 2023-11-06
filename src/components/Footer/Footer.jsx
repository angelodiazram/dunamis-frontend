import './footer.css';


export const Footer = () => {
    return (
        <>
            <footer id='main-footer'>
                <section id='top-footer'>
                    <div id='nosotros'>
                        <h3>Un poco de nosotros</h3>
                        <hr />
                        <p>
                            En Dunamis Papelería diseñamos y creamos productos con el fin de acercar a las personas a 
                            las escrituras de una manera creativa, cada diseño es exclusivo y hecho por nuestras propias manos.
                        </p>
                    </div>
                    <div id='contacto'>
                        <h3>Contacto</h3>
                        <hr />
                        <ul id='ul-contacto'>
                            <li className='li-contacto'>Dunamis.papeleria@gmail.com</li>
                            <li className='li-contacto'>+569 42434229</li>
                        </ul>
                    </div>
                    <div id='adress'>
                        <h3>Dirección</h3>
                        <hr />
                        <p>
                            Estamos ubicados en Av. José Pedro Alessandri 665, Ñuñoa a pasos del Mall Portal Ñuñoa y frente al UMCE.
                        </p>
                    </div>
                </section>
                <section id='bottom-footer'>
                    <div id='footer-logo'>
                        <img src="/assets/img/DUNAMIS_LOGO_EDITADO.png" alt="Dunamis"/>
                    </div>
                    <div id='derechos'>
                        <p>© 2023 Dunamis Papeleria, Todo los derechos reservados. ®</p>
                    </div>
                </section>
            </footer>
        </>
    );
};