import { Col } from "react-bootstrap";

const ItemCarrito = () => {
    return (
        <>
            <Col sm={12} md={3}>
                <img className="rounded" src="https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" alt="" width={300} />
            </Col>
            <Col sm={12} md={3}>
                Descripcion
            </Col>
            <Col sm={12} md={3}>
                Cantidad: 1
            </Col>
            <Col sm={12} md={3}>
                Precio: $2000
            </Col>
        </>
    );
};

export default ItemCarrito;