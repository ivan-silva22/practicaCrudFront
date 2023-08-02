import { Container, Nav, Navbar, NavDropdown} from 'react-bootstrap';

const Menu = () => {
    return (
        <Navbar expand="lg" className="bg-body-tertiary border-bottom">
      <Container>
        <Navbar.Brand href="#home">Tucu Tecno</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Inicio</Nav.Link>
            <NavDropdown title="Administrador" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Usuarios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Productos
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Pedidos</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#home">Carrito</Nav.Link>
            <Nav.Link href="#home">Login</Nav.Link>
            <Nav.Link href="#home">Registrate</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Menu;