import { Routes, Route } from "react-router-dom";
import Administrador from "../AdministradorProductos/Administrador";
import UsuarioAdministrador from "../AdministradorUsuario/UsuarioAdministrador";
import Pedidos from "../AdministradorPedidos/Pedidos";
import CrearProducto from "../AdministradorProductos/CrearProducto";
import EditarProducto from "../AdministradorProductos/EditarProducto";
import CrearUsuario from "../AdministradorUsuario/CrearUsuario";
import EditarUsuario from "../AdministradorUsuario/EditarUsuario";

const RutasAdministrador = () => {
  return (
    <>
      <Routes>
        <Route
          exact
          path="/"
          element={<Administrador></Administrador>}
        ></Route>
        <Route
          exact
          path="/administradorusuarios"
          element={<UsuarioAdministrador></UsuarioAdministrador>}
        ></Route>
        <Route
          exact
          path="/administradorpedidos"
          element={<Pedidos></Pedidos>}
        ></Route>
        <Route
          exact
          path="/crear-producto"
          element={<CrearProducto></CrearProducto>}
        ></Route>
        <Route
          exact
          path="/editar-producto/:id"
          element={<EditarProducto></EditarProducto>}
        ></Route>
        <Route
          exact
          path="/crear-usuario"
          element={<CrearUsuario></CrearUsuario>}
        ></Route>
        <Route
          exact
          path="/editar-usuario"
          element={<EditarUsuario></EditarUsuario>}
        ></Route>
      </Routes>
    </>
  );
};

export default RutasAdministrador;
