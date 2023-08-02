import { Container, Form, Button, FormGroup } from "react-bootstrap";

const Registro = () => {
    return (
        <Container className="w-50 border border-1 p-4">
            <h3>Registro</h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control type="text" placeholder="Jose" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Apellido*</Form.Label>
          <Form.Control type="text" placeholder="Fernandez" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Correo electronico*</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Contrasña*</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <FormGroup className="text-center">
            <Button type='submit' variant='primary' className="w-50">Registrarse</Button>
        </FormGroup>
      </Form>
    </Container>
    );
};

export default Registro;