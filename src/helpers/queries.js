const apiUsuario = import.meta.env.VITE_API_USUARIO;
const apiProducto = import.meta.env.VITE_API_PRODUCTO;

export const iniciarSesion = async (usuario) =>{
    try {
        const respuesta = await fetch(apiUsuario);
        const arrayUsuarios = await respuesta.json();
        console.log(arrayUsuarios);
        const buscarUsuario = arrayUsuarios.find((itemUsuario) => itemUsuario.email === usuario.email);
        if(buscarUsuario){
            console.log('email encontrado')
            if(buscarUsuario.password === usuario.password){
                return buscarUsuario;
            }else{
                console.log('el  password es incorrecto');
                return null;
            }
        }else{
            console.log('el email es incorrecto')
            return null;
        }
    } catch (error) {
        console.log(error);
    }
}

export const listarProductos = async () =>{
    try {
        const respuesta = await fetch(apiProducto);
        const arrayProductos = await respuesta.json();
        return arrayProductos;
    } catch (error) {
        console.log(error);
    }
}


export const eliminarProducto = async (id) =>{
    try {
        const respuesta = await fetch(`${apiProducto}/${id}`,{
            method: 'DELETE'
        })
        return respuesta;
    } catch (error) {
        console.log(error);
    }
}