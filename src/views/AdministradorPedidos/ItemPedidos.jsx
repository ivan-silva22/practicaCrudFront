import { Button } from "react-bootstrap";

const ItemPedidos = () => {
    return (
        <>
            <tbody>
            <tr>
            <td>1</td>
            <td>Ivan</td>
            <td>04/08/2023</td>
            <td>
            Teclado
            </td>
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