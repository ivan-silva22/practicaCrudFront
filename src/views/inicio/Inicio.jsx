import { Container, Row, Col } from "react-bootstrap";
import Slaider from "./Slaider";
import CardProductos from "./CardProductos";

const Inicio = () => {
  return (
    <>
      <Slaider></Slaider>
      <Container className="my-5">
        <h1>Productos Disponibles</h1>
        <hr />
        <Row className="my-5">
          <Col><CardProductos></CardProductos></Col>
        </Row>
      </Container>
    </>
  );
};

export default Inicio;
