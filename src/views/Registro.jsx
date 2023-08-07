import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const Registro = () => {
  const {register, handleSubmit, formState: { errors }, reset } = useForm();

  const onSubmit = (usuario) =>{
    console.log(usuario);
  }
    return (
        <Container className="p-4 main my-5">
            <h3>Registro</h3>
      <Form className='font' onSubmit={handleSubmit(onSubmit)}>
        <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
          <Form.Label>Nombre*</Form.Label>
          <Form.Control type="text" placeholder="Jose" 
          {...register('nombreUsuario', {
            required: 'El nombre es obligatorio',
            minLength: {
              value: 2,
              message: "La cantidad mínima de caracteres es de 2 dígitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad máxima de caracteres es de 100 dígitos",
            },
          })}
          />
           <Form.Text className="text-danger">
               {errors.nombreUsuario?.message}
           </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlApellido">
          <Form.Label>Apellido*</Form.Label>
          <Form.Control type="text" placeholder="Fernandez" 
          {...register('apellidoUsuario', {
            required: 'El apellido es obligatorio',
            minLength: {
              value: 2,
              message: "La cantidad mínima de caracteres es de 2 dígitos",
            },
            maxLength: {
              value: 100,
              message: "La cantidad máxima de caracteres es de 100 dígitos",
            },
          })}
          />
           <Form.Text className="text-danger">
               {errors.apellidoUsuario?.message}
           </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlEmail">
          <Form.Label>Correo electronico*</Form.Label>
          <Form.Control type="email" placeholder="name@example.com"
           {...register("email", {
            required: "El correo electrónico es obligatorio",
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
              message: "Correo electrónico inválido",
            },
          })}
          />
          <Form.Text className="text-danger">
            {errors.email?.message}
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Label>Contrasña*</Form.Label>
          <Form.Control type="password" placeholder="********"
          {...register("password", {
            required: "La contraseña es obligatoria",
            minLength: {
              value: 6,
              message: "La contraseña debe tener al menos 6 caracteres",
            },
          })}
          />
           <Form.Text className="text-danger">
            {errors.password?.message}
          </Form.Text>
        </Form.Group>
        <FormGroup className="text-center">
            <Button type='submit' variant='primary' className="boton" >Registrarse</Button>
        </FormGroup>
      </Form>
    </Container>
    );
};

export default Registro;