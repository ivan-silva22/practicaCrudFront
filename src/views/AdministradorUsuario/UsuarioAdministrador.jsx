import { Button, Table, Container } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario";

const UsuarioAdministrador = () => {
  return (
    <Container>
        <div className='my-3'>
            <Button variant="primary">Crear usuario</Button>
        </div>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>Rol</th>
            <th>Opciones</th>
          </tr>
        </thead>
            <ItemUsuario></ItemUsuario>
      </Table>
    </Container>
  );
};

export default UsuarioAdministrador;
