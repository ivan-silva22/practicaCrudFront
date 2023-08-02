import { Card, Button } from "react-bootstrap";

const CardProductos = () => {
  return (
    <>
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" />
        <Card.Body>
          <Card.Title>Teclado Gamers</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the cards content.
          </Card.Text>
          <Button variant="danger">Ver más...</Button>
        </Card.Body>
      </Card>
    </>
  );
};

export default CardProductos;
