import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';

const feather = require('feather-icons');

setTimeout(() => {
    feather.replace();
}, 1000);


import { Link } from "react-router-dom";

const Header = () => {
    return (
        <header className="header-container color-terciario">
            <Navbar expand="lg">
                <Container>
                    <Navbar.Brand href="/Inicio">
                        <img
                            src="https://pbs.twimg.com/tweet_video_thumb/Fp6rwlnXgAMoTre.jpg"
                            alt="GF.img"
                            height="70"
                            className="d-inline-block align-top"
                        />{' '}
                        
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="me-auto">
                            <Nav.Link href="/inicio">Inicio</Nav.Link>
                            <Nav.Link href="/gatos-en-venta">Gatos en venta</Nav.Link>
                            <Nav.Link href="/sobre-nosotros">Sobre nosotros</Nav.Link>
                            <Nav.Link href="/contacto">Contacto</Nav.Link>
                        </Nav>
                        <Nav>
                            <Nav.Link href="/carrito">
                            <i data-feather="shopping-cart"></i>
                            </Nav.Link>
                            <Nav.Link href="/favoritos">
                            <i data-feather="star"></i>
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </header>
    );
}

export default Header;