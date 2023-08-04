import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardProductos = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" />
        <Card.Body className="font">
          <Card.Title>Teclado Gamers</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Link className="btn btn-outline-primary" to={'/detalle'}>Ver más...</Link>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProductos;
