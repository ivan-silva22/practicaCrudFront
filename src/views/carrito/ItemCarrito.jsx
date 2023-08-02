import { Col } from "react-bootstrap";

const ItemCarrito = () => {
    return (
        <>
            <Col>
                <img className="rounded" src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" alt="" width={300} />
            </Col>
            <Col>
                Descripcion
            </Col>
            <Col>
                Cantidad: 1
            </Col>
            <Col>
                Precio: $2000
            </Col>
        </>
    );
};

export default ItemCarrito;