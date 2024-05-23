import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import 'bootstrap/dist/css/bootstrap.min.css';

import "./../style.css"

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);

const Footer = () => {
    return (
        <footer className="text-light color-terciario">
            <Container>
                <Navbar expand="lg" variant="dark">
                    <br/>
                </Navbar>
                <div className="row">
                    <div className="col-md-4">
                        <h5>Información de contacto</h5>
                        <p>Correo electrónico: ragredai1@upao.edu.pe</p>
                        <p>Teléfono: +51 922 940 907</p>
                    </div>
                    <div className="col-md-4">
                        <h5>Redes sociales</h5>
                        <p>Síguenos en nuestras redes sociales para estar al tanto de los últimos gatitos:</p>
                        <ul className="list-unstyled">
                            <li><a href="https://www.facebook.com/nose" target="_blank" rel="noopener noreferrer"><i data-feather="facebook"></i> Facebook</a></li>
                            <li><a href="https://twitter.com/queponer" target="_blank" rel="noopener noreferrer"><i data-feather="twitter"></i> Twitter</a></li>
                            <li><a href="https://www.instagram.com/peroluegopongo" target="_blank" rel="noopener noreferrer"><i data-feather="instagram"></i> Instagram</a></li>
                        </ul>
                    </div>
                    <div className="col-md-4">
                        <h5>Enlaces rápidos</h5>
                        <ul className="list-unstyled">
                            <li><a href="/">Inicio</a></li>
                            <li><a href="/contacto">Contacto</a></li>
                            <li><a href="/sobre-nosotros">Sobre nosotros</a></li>
                            <li><a href="/politica-de-venta">Política de venta</a></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <p className="text-center">© 2024 Catstore. Todos los derechos reservados.</p>
                <p className="text-center">
                    <Nav.Link href="/politica-de-privacidad">Política de privacidad</Nav.Link> | <Nav.Link href="/terminos-de-servicio">Términos de servicio</Nav.Link>
                </p>
            </Container>
        </footer>
    );
}

export default Footer;