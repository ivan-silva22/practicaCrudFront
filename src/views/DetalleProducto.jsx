import { useEffect, useState } from "react";
import { Container, Row, Col, Card, Button } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";
import { listarProducto } from "../helpers/queries";
import Swal from "sweetalert2";



const DetalleProducto = () => {
  const {id} = useParams();
  const [producto, setProducto] = useState({});

  useEffect(()=>{
    listarProducto(id).then((respuesta)=>{
      if(respuesta){
        setProducto(respuesta);
      }else{
        Swal.fire(
          "Ocurrio un error",
          "Intente esta operación en unos minutos",
          "error"
        );
      }
    })
  }, [])


  return (
    <Container className="my-4 main font">
      <h3>Detalle Producto</h3>
      <Card className="p-3">
        <Row>
          <Col>
            <Card.Img
              variant="top"
              src={producto.imagenProducto}
              title={producto.nombreProducto}
            />
          </Col>
          <Col>
            <Card.Body>
              <Card.Title>{producto.nombreProducto}</Card.Title>
              <Card.Text>
                {producto.descripcionProducto}
                <br />
                <span className="text-danger fw-semibold">Precio:</span>{" "}
                ${producto.precioProducto}
              </Card.Text>
              <Button variant="primary">Agregar al carrito</Button>
            </Card.Body>
          </Col>
        </Row>
      </Card>
      <div className="my-5">
        <h3>Más Productos</h3>
      <Row className="mx-5">
        <Col sm={12} md={4}>
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
        <Col sm={12} md={4}>
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
