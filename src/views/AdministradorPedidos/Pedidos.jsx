import { Container, Table } from "react-bootstrap";
import ItemPedidos from "./ItemPedidos";

const Pedidos = () => {
  return (
    <Container className="my-5 font">
        <h3>Administrar de pedidos</h3>
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
        <ItemPedidos></ItemPedidos>
      </Table>
    </Container>
  );
};

export default Pedidos;
