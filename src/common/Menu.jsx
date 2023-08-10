import { Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
import logo from "../assets/logo.jpg";
import { Link, useNavigate } from 'react-router-dom';

const Menu = ({ usuarioLogueado, setUsuarioLogueado}) => {

  const navegacion = useNavigate();

  const cerrarSesion = () =>{
    setUsuarioLogueado({});
    sessionStorage.removeItem('usuario');
    navegacion('/');
  }

    return (
        <Navbar expand="lg" className="bg-footer-nav shadow-lg">
      <Container>
        <Link className='navbar-nav nav-link' to={'/'}> <img className="logoMenu" src={logo} alt="logo" /> </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Link className='navbar-nav nav-link nav-link-color' to={'/'}>Inicio</Link>
            {
              (usuarioLogueado.perfil === "administrador")?(
                <>
                    <NavDropdown className='nav-link-color' title="Administrador" id="basic-nav-dropdown">
                      <Link className='nav' to={'/administradorproductos/administradorusuarios'}>Usuarios</Link>
                      <Link className='nav' to={'/administradorproductos'}>
                      Productos
                      </Link>
                      <Link className='nav' to={'/administradorproductos/administradorpedidos'}>Pedidos</Link>
                    </NavDropdown>
                    <Button className='navbar-nav nav-link nav-link-color' onClick={cerrarSesion}>Cerrar sesion</Button>
                </>
              ):(usuarioLogueado.nombreUsuario)?(
                <>
                  <Button className='navbar-nav nav-link nav-link-color'>Cerrar sesion</Button>
                </>
              ):<>
                <Link className='navbar-nav nav-link nav-link-color' to={'/login'} >Login</Link>
                <Link className='navbar-nav nav-link nav-link-color' to={'/registro'}>Registrate</Link>
              </>
            }
            <Link className='navbar-nav nav-link nav-link-color' to={'/carrito'} >Carrito</Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;