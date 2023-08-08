import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
// import CrearProducto from './views/AdministradorProductos/CrearProducto';
// import EditarProducto from './views/AdministradorProductos/EditarProducto';
// import Administrador from './views/AdministradorProductos/Administrador';
// import EditarUsuario from './views/AdministradorUsuario/EditarUsuario';
// import UsuarioAdministrador from './views/AdministradorUsuario/UsuarioAdministrador';
// import CrearUsuario from './views/AdministradorUsuario/CrearUsuario';
// import Carrito from './views/carrito/Carrito';
// import Registro from './views/Registro';
import Login from './views/Login';
// import DetalleProducto from './views/DetalleProducto';
import Inicio from './views/inicio/Inicio'
import Registro from './views/Registro';
import Menu from './common/Menu';
import Footer from './common/Footer';
import DetalleProducto from './views/DetalleProducto';
import Administrador from './views/AdministradorProductos/Administrador';
import UsuarioAdministrador from './views/AdministradorUsuario/UsuarioAdministrador';
import Carrito from './views/carrito/Carrito';
import Pedidos from './views/AdministradorPedidos/Pedidos';
import { useState } from 'react';
// import Menu from './common/Menu';
// import Footer from './common/Footer';

function App() {
 
  const [usuarioLogueado, setUsuarioLogueado] = useState({});

  return (
    <BrowserRouter>
      <Menu usuarioLogueado={usuarioLogueado} setUsuarioLogueado={setUsuarioLogueado}></Menu>
      <Routes>
          <Route exact path='/' element={<Inicio></Inicio>}></Route>
          <Route exact path='/login' element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}></Route>
          <Route exact path='/registro' element={<Registro></Registro>}></Route>
          <Route exact path='/detalle' element={<DetalleProducto></DetalleProducto>}></Route>
          <Route exact path='/administradorproductos' element={<Administrador></Administrador>}></Route>
          <Route exact path='/administradorusuarios' element={<UsuarioAdministrador></UsuarioAdministrador>}></Route>
          <Route exact path='/administradorpedidos' element={<Pedidos></Pedidos>}></Route>
          <Route exact path='/carrito' element={<Carrito></Carrito>}></Route>
      </Routes>
      <Footer></Footer>
      {/*  */}
      {/* <Menu></Menu> */}
      {/* <Footer></Footer> */}
      {/* <DetalleProducto></DetalleProducto> */}
      {/* <Login></Login> */}
      {/* <Registro></Registro> */}
      {/* <Carrito></Carrito> */}
      {/* <CrearUsuario></CrearUsuario> */}
      {/* <UsuarioAdministrador></UsuarioAdministrador> */}
      {/* <EditarUsuario></EditarUsuario> */}
      {/* <Administrador></Administrador> */}
      {/* <CrearProducto></CrearProducto> */}
      {/* <EditarProducto></EditarProducto> */}
    </BrowserRouter>
  )
}

export default App
