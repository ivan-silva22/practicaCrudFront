import { Container, Table } from "react-bootstrap";
import ItemPedidos from "./ItemPedidos";

const Pedidos = () => {
  return (
    <Container className="my-5 font main">
        <h3>Administrar de pedidos</h3>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Usuario</th>
            <th>Fecha</th>
            <th>Producto</th>
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
