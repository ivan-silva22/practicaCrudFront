import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const DetalleProducto = () => {
  return (
    <Container className="my-4 main font">
      <h3>Detalle Producto</h3>
      <Card className="p-3">
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg"
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>Teclado</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="my-5">
        <h3>Más Productos</h3>
      <Row className="mx-5">
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg"
            />
            <Card.Body className="font">
              <Card.Title>Teclado Gamers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Link className="btn btn-outline-primary" to={"/detalle"}>
                Ver más...
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg"
            />
            <Card.Body className="font">
              <Card.Title>Teclado Gamers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Link className="btn btn-outline-primary" to={"/detalle"}>
                Ver más...
              </Link>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card style={{ width: "18rem" }}>
            <Card.Img
              variant="top"
              src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg"
            />
            <Card.Body className="font">
              <Card.Title>Teclado Gamers</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the cards content.
              </Card.Text>
              <Link className="btn btn-outline-primary" to={"/detalle"}>
                Ver más...
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      </div>
    </Container>
  );
};

export default DetalleProducto;
