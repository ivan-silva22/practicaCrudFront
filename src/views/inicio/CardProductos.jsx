import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProductos = ( {producto} ) => {
   
  return (
    <Col  md={4} ld={3}>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={producto.imagenProducto} title={producto.nombreProducto} />
        <Card.Body className="font">
          <Card.Title>{producto.nombreProducto}</Card.Title>
          <Card.Text>
            {producto.descripcionProducto}
          </Card.Text>
          <Link className="btn btn-outline-primary" to={`/detalle/${producto.id}`}>Ver más...</Link>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardProductos;
