import { Button } from "react-bootstrap";

const ItemUsuario = () => {
    return (
        <>
            <tbody>
            <tr>
            <td>1</td>
            <td>Ivan</td>
            <td>Silva</td>
            <td>Administrador</td>
            <td className="d-flex justify-content-evenly">
              <Button variant="warning">Editar</Button>
              <Button variant="danger">Eliminar</Button>
            </td>
            </tr>
            </tbody>
            
            
        </>
    );
};

export default ItemUsuario;