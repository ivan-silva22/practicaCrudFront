import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import { eliminarProducto, listarProductos } from "../../helpers/queries";

const ItemProducto = ({ producto, index, setProductos }) => {

    const borrarProducto = () =>{
        Swal.fire({
            title: `¿Estas seguro que desea eliminar ${producto.nombreProducto}?`,
            text: "No se puede revertir este paso!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Eliminar!',
            cancelButtonText: 'Cancelar'
          }).then((result) => {
            if (result.isConfirmed) {
                eliminarProducto(producto.id).then((respuesta)=>{
                    console.log(respuesta);
                    if(respuesta.status === 200){
                        Swal.fire(
                            'Producto eliminado!',
                            `${producto.nombreProducto} fue eliminado correctamente`,
                            'success'
                          )
                         listarProductos().then((respuesta)=>setProductos(respuesta)); 
                    }else{
                        Swal.fire(
                            'Ocurrio un error!',
                            'Intente realizar esta operación nuevamente más tarde',
                            'error'
                          )
                    }
                })
            }
          })
    }
    return (
        <>
            <tbody>
            <tr>
            <td>{index + 1}</td>
            <td>{producto.nombreProducto}</td>
            <td>{producto.descripcion}</td>
            <td>
            {producto.imagen}
            </td>
            <td>${producto.precio}</td>
            <td>{producto.estado}</td>
            <td className="d-flex justify-content-evenly">
              <Button variant="warning">Editar</Button>
              <Button variant="danger" onClick={borrarProducto} >Eliminar</Button>
            </td>
            </tr>
            </tbody>
            
            
        </>
    );
};

export default ItemProducto;