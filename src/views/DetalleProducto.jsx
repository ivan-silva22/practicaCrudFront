import { Container, Row, Col, Card, Button } from "react-bootstrap";

const DetalleProducto = () => {
  return (
    <Container>
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
    </Container>
  );
};

export default DetalleProducto;
