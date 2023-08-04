import { Container, Table } from "react-bootstrap";

const Pedidos = () => {
  return (
    <Container>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>URL de Imagen</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        <ItemProducto></ItemProducto>
      </Table>
    </Container>
  );
};

export default Pedidos;
