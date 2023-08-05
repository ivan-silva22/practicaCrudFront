import { Container, Row, Button } from "react-bootstrap";
import ItemCarrito from "./ItemCarrito";

const Carrito = () => {
  return (
    <Container className="main font my-4">
        <h3>Carrito</h3>
        <hr />
      <Row>
        <ItemCarrito></ItemCarrito>
      </Row>
      <hr />
      <div className='d-flex justify-content-end'>
        <h3 className="me-2">Total: $2000</h3>
        <Button variant='primary' >Comprar</Button>
      </div>
    </Container>
  );
};

export default Carrito;
