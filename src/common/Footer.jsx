import {  Row, Col } from 'react-bootstrap';
import logo from '../assets/logo.png';

const Footer = () => {
    return (
        <div>
            <Row className="bg-dark  text-center">
        <Col>
            <img className='logo' src={logo} alt="logo" />
        </Col>
        <Col>
            <p><a href="#">Quienes somos</a></p>
            <p><a href="#">Telefono: 111111</a></p>
            <p><a href="#">Direccion: Av. Campero 516</a></p>
            <p><a href="#">Correro: mail@mail.com</a></p>
        </Col>
        <Col>
            <p>Seguinos en nuestras redes:</p>
            <a href="#">Facebook</a>
            <a href="#">Instagram</a>
        </Col>
      </Row>
        </div>
    );
};

export default Footer;