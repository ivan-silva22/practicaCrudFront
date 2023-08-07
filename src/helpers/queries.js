const apiUsuario = import.meta.env.VITE_API_USUARIO;

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