import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";

const CrearUsuario = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();


  return (
    <Container className="w-50 border border-1 p-4 main font">
      <h3>Crear usuario </h3>
      <Form onSubmit={handleSubmit(onSubmit)}>
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
          <Form.Label>Contrasña*</Form.Label>
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
        <Form.Group className="mb-3" controlId="exampleForm.ControlPassword">
          <Form.Select aria-label="Default select example"
          {...register("categoria", {
            required: "La categoria es obligatoria",
          })}
          >
            <option value="administrador">Administrador</option>
          </Form.Select>
          <Form.Text className="text-danger">
          {errors.categoria?.message}
          </Form.Text>
        </Form.Group>
        <FormGroup className="text-center">
          <Button type="submit" variant="primary" className="w-50">
            Registrate
          </Button>
        </FormGroup>
      </Form>
    </Container>
  );
};

export default CrearUsuario;
