import {  Table, Container } from "react-bootstrap";
import ItemProducto from "./ItemProducto";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { listarProductos } from "../../helpers/queries";


const Administrador = () => {

  const [productos, setProductos] = useState([]);

  useEffect(()=>{
    listarProductos().then((respuesta)=>{
      console.log(respuesta);
      setProductos(respuesta);
    })
  },[])
    return (
        <Container className="main font my-5">
          <h3>Administrar productos</h3>
        <div className='mb-2'>
            <Link className="btn btn-primary" to={'/administradorproductos/crear-producto'}>Crear Producto</Link>
        </div>
      <Table striped bordered hover responsive className="text-center">
        <thead>
          <tr>
            <th>#</th>
            <th>Nombre</th>
            <th>Descripcion</th>
            <th>URL de Imagen</th>
            <th>Precio</th>
            <th>Estado</th>
            <th>Opciones</th>
          </tr>
        </thead>
        {
          productos.map((producto, index)=> <ItemProducto key={producto.id} producto={producto} index={index} setProductos={setProductos} ></ItemProducto>)
        }
      </Table>
    </Container>
    );
};

export default Administrador;