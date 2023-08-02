import { Button } from "react-bootstrap";

const ItemProducto = () => {
    return (
        <>
            <tbody>
            <tr>
            <td>1</td>
            <td>Teclado</td>
            <td>Alguna descripcion</td>
            <td>
            https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg
            </td>
            <td>$2500</td>
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