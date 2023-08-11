import { Container, Form, Button, FormGroup } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { editarProducto, listarProducto } from "../../helpers/queries";
import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import Swal from "sweetalert2";

const EditarProducto = () => {
  const {register, handleSubmit, formState: {errors}, reset, setValue} = useForm();

  const {id} = useParams();
  const navegacion = useNavigate();

  useEffect(()=>{
    listarProducto(id).then((respuesta)=>{
      if(respuesta){
        setValue('nombreProducto', respuesta.nombreProducto);
        setValue('descripcionProducto', respuesta.descripcionProducto);
        setValue('imagenProducto', respuesta.imagenProducto);
        setValue('precioProducto', respuesta.precioProducto);
        setValue('estadoProducto', respuesta.estadoProducto);
      }else{
        Swal.fire('Ocurrio un error', `No se puede editar el producto, intentelo mas tarde`, 'error');
      }
    })
  }, []);

  const onSubmit = (productoEditado) =>{
    editarProducto(productoEditado, id).then((respuesta)=>{
      if(respuesta && respuesta.status === 200){
        Swal.fire('Producto editado', `El producto ${productoEditado.nombreProducto} fue editado correctamente`, 'success');
        navegacion('/administradorproductos');
      }else{
        Swal.fire('Ocurrio un error', `El producto ${productoEditado.nombreProducto} no fue editado, intentelo mas tarde`, 'error');
      }
    })
  }

    return (
        <Container className="w-50 border border-1 p-4 main font my-4">
        <h3>Editar producto </h3>
        <Form onSubmit={handleSubmit(onSubmit)}>
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
                value: 10000,
                message: "El precio maximo es de $10000",
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

export default EditarProducto;