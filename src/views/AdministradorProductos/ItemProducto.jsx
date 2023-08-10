import { Button } from "react-bootstrap";

const ItemProducto = ({ producto, index }) => {
    return (
        <>
            <tbody>
            <tr>
            <td>{index + 1}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.descripcion}</td>
            <td>
            {producto.imagen}
            </td>
            <td>${producto.precio}</td>
            <td>{producto.estado}</td>
            <td className="d-flex justify-content-evenly">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Eliminar</Button>
            </td>
            </tr>
            </tbody>
            
            
        </>
    );
};

export default ItemProducto;