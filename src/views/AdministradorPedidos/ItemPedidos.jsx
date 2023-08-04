import { Button } from "react-bootstrap";

const ItemPedidos = () => {
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
            <th>Pendiente</th>
            <td>
              <Button variant="danger">Enviar pedido</Button>
            </td>
            </tr>
            </tbody>
        </>
    );
};

export default ItemPedidos;