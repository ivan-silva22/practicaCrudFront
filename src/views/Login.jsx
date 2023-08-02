import { Container, Form, Button, FormGroup } from "react-bootstrap";

const Login = () => {
  return (
    <Container className="w-50 border border-1 p-4">
        <h3>Iniciar sesion </h3>
      <Form>
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <FormGroup className="text-center">
            <Button type='submit' variant='primary' className="w-50">Iniciar Sesion</Button>
        </FormGroup>
      </Form>
      <div className="mt-3 text-center">
        <p>Aun no tienes cuenta? <a href="#">Registrate</a> </p>
      </div>
    </Container>
  );
};

export default Login;
