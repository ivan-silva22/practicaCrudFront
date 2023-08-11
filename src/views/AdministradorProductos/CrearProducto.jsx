import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { agregarProducto } from "../../helpers/queries";
import Swal from "sweetalert2";

const CrearProducto = () => {
  const {register, handleSubmit, formState: {errors}, reset} = useForm();
  
  const onSubmit = (productoNuevo) =>{
    agregarProducto(productoNuevo).then((respuesta)=>{
      if(respuesta && respuesta.status === 201){
        Swal.fire('Producto creado', `El producto ${productoNuevo.nombreProducto} fue creado correctamente`, 'success');
        reset();
      }else{
        Swal.fire('Ocurrio un error', `El producto ${productoNuevo.nombreProducto} no fue creado, intentelo mas tarde`, 'error');
      }
    })
  }

    return (
        <Container className="w-50 border border-1 p-4 main">
        <h3>Crear producto </h3>
        <Form  onSubmit={handleSubmit((onSubmit))}>
          <Form.Group className="mb-3" controlId="exampleForm.ControlNombre">
            <Form.Label>Nombre*</Form.Label>
            <Form.Control type="text" placeholder="Teclado"
            {...register('nombreProducto', {
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
               {errors.nombreProducto?.message}
           </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlDescripcion">
            <Form.Label>Descripcion*</Form.Label>
            <Form.Control type="text" placeholder="Descripcion"
            {...register('descripcionProducto', {
              required: 'La descripción es obligatoria',
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
               {errors.descripcionProducto?.message}
           </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlImagen">
            <Form.Label>URL de imagen*</Form.Label>
            <Form.Control type="text" placeholder=" https://images.pexels.com/photos/3829226/pexels-photo-3829226.jpeg" 
             {...register('imagenProducto', {
              required: "La imagen es obligatoria",
            })}
            />
            <Form.Text className="text-danger">
          {errors.imagen?.message}
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlPrecio">
            <Form.Label>Precio*</Form.Label>
            <Form.Control type="number" placeholder="2000"
            {...register("precioProducto", {
              required: "El precio del producto es obligatorio",
              min: {
                value: 1,
                message: "El precio minimo es de $1",
              },
              max: {
                value: 100000000,
                message: "El precio maximo es de $10000000",
              },
            })}
            />
            <Form.Text className="text-danger">
          {errors.precio?.message}
          </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlEstado">
          <Form.Label>Estado*</Form.Label>
          <Form.Select aria-label="Default select example"
          {...register("estadoProducto", {
            required: "El estado es obligatorio",
          })}
          >
          <option value="">Seleccione una opción</option>
            <option value="activo">Activo</option>
            <option value="inactivo">Inactivo</option>
          </Form.Select>
          <Form.Text className="text-danger">
          {errors.estado?.message}
          </Form.Text>
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

export default CrearProducto;