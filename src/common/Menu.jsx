import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import logo from "../assets/logo.jpg";
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-footer-nav shadow-lg">
      <Container>
        <Link className='navbar-nav nav-link' to={'/'}> <img className="logoMenu" src={logo} alt="logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='navbar-nav nav-link nav-link-color' to={'/'}>Inicio</Link>
            <NavDropdown className='nav-link-color' title="Administrador" id="basic-nav-dropdown">
              <Link className='nav' to={'/administradorusuarios'}>Usuarios</Link>
              <Link className='nav' to={'/administradorproductos'}>
                Productos
              </Link>
              <Link className='nav' to={'/administradorpedidos'}>Pedidos</Link>
            </NavDropdown>
            <Link className='navbar-nav nav-link nav-link-color' to={'/carrito'} >Carrito</Link>
            <Link className='navbar-nav nav-link nav-link-color' to={'/login'} >Login</Link>
            <Link className='navbar-nav nav-link nav-link-color' to={'/registro'}>Registrate</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;