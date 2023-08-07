import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iniciarSesion } from "../helpers/queries";
const Login = () => {

  iniciarSesion()

  return (
    <Container className=" p-4 main my-5">
        <h3>Iniciar sesion </h3>
      <Form className="font">
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********" />
        </Form.Group>
        <FormGroup className="text-center">
            <Button type='submit' variant='primary' className='boton' >Iniciar Sesion</Button>
        </FormGroup>
      </Form>
      <div className="mt-3 text-center">
        <p>Aun no tienes cuenta? <Link to={'/registro'}>Registrate</Link> </p>
      </div>
    </Container>
  );
};

export default Login;
