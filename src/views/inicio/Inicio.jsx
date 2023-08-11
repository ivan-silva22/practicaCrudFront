import { Container, Row } from "react-bootstrap";
import Slaider from "./Slaider";
import CardProductos from "./CardProductos";
import { useEffect, useState } from "react";
import { listarProductos } from "../../helpers/queries";


const Inicio = () => {
  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    listarProductos().then((respuesta)=>{
      setProductos(respuesta);
    })
  }, [])

  return (
    <section className='main font'>
      <Slaider></Slaider>
      <Container className="my-5">
        <h1>Productos Disponibles</h1>
        <hr />
        <Row className="my-5">
          {
            productos.map((producto) => <CardProductos key={producto.id} producto={producto}></CardProductos>)
          }
          {/* <Col><CardProductos></CardProductos></Col> */}
        </Row>
      </Container>
    </section>
  );
};

export default Inicio;
