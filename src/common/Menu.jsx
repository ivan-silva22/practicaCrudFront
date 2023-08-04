import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
      <Container>
        <Link className='navbar-nav nav-link' to={'/'}>Tucu Tecno</Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='navbar-nav nav-link' to={'/'}>Inicio</Link>
            <NavDropdown title="Administrador" id="basic-nav-dropdown">
              <Link className='navbar-nav nav-link' to={'/administradorusuarios'}>Usuarios</Link>
              <Link className='navbar-nav nav-link' to={'/administradorproductos'}>
                Productos
              </Link>
              <Link className='navbar-nav nav-link' to={'/administradorpedidos'}>Pedidos</Link>
            </NavDropdown>
            <Link className='navbar-nav nav-link' to={'/carrito'} >Carrito</Link>
            <Link className='navbar-nav nav-link' to={'/login'} >Login</Link>
            <Link className='navbar-nav nav-link' to={'/registro'}>Registrate</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;