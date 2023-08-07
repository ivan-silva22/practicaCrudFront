import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { Link } from "react-router-dom";
import { iniciarSesion } from "../helpers/queries";
import { useForm } from "react-hook-form";
const Login = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  
  const onSubmit = (usuario) =>{
    console.log(usuario);
    iniciarSesion();
  }
  

  return (
    <Container className=" p-4 main my-5">
        <h3>Iniciar sesion </h3>
      <Form className="font" onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Correo electronico</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"
          { ...register('email', {
            required:'El email es obligatorio',
            pattern:{
              value: /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=? ^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a -z0-9](?:[a-z0-9-]*[a-z0-9])?$/,
              message:'El email debe tener el siguiente formato mail@dominio.com'
            }
           } ) }
           />
           <Form.Text className="text-danger">
               {errors.email?.message}
           </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Contraseña</Form.Label>
          <Form.Control type="password" placeholder="********"
           {...register('password',{
            required: 'La contraseña es obligatoria',
            pattern:{
              value: /^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/,
              message: 'La contraseña debe tener al entre 8 y 16 caracteres, al menos un dígito, al menos una minúscula y al menos una mayúscula. No puede tener otros símbolos.'
            }
           })}
           />
           <Form.Text className="text-danger">
               {errors.password?.message}
           </Form.Text>
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
