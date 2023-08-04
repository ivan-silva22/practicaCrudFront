import { Button, Table, Container } from "react-bootstrap";
import ItemUsuario from "./ItemUsuario";

const UsuarioAdministrador = () => {
  return (
    <Container className="main font my-5">
      <h3>Administrar usuarios</h3>
        <div className='mb-2'>
            <Button variant="primary">Crear usuario</Button>
        </div>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Email</th>
            <th>Estado</th>
            <th>Perfil</th>
            <th>Opciones</th>
          </tr>
        </thead>
            <ItemUsuario></ItemUsuario>
      </Table>
    </Container>
  );
};

export default UsuarioAdministrador;
