import { Container, Form, Button, FormGroup } from "react-bootstrap";

const EditarProducto = () => {
    return (
        <Container className="w-50 border border-1 p-4 main font">
        <h3>Editar producto </h3>
        <Form>
          <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control type="text" placeholder="Teclado" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlDescripcion">
            <Form.Label>Descripcion*</Form.Label>
            <Form.Control type="text" placeholder="Descripcion" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlImagen">
            <Form.Label>URL de imagen*</Form.Label>
            <Form.Control type="text" placeholder=" https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="2000" />
          </Form.Group>
          <FormGroup className="text-center">
            <Button type="submit" variant="primary" className="w-50">
              Guardar
            </Button>
          </FormGroup>
        </Form>
      </Container>
    );
};

export default EditarProducto;