import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Login from "./views/Login";
import Inicio from "./views/inicio/Inicio";
import Registro from "./views/Registro";
import Menu from "./common/Menu";
import Footer from "./common/Footer";
import DetalleProducto from "./views/DetalleProducto";
import Carrito from "./views/carrito/Carrito";
import { useState } from "react";
import RutasProtegidas from "./views/routes/RutasProtegidas";
import RutasAdministrador from "./views/routes/RutasAdministrador";

function App() {
  const usuario = JSON.parse(sessionStorage.getItem("usuario")) || {};

  const [usuarioLogueado, setUsuarioLogueado] = useState(usuario);

  return (
    <BrowserRouter>
      <Menu
        usuarioLogueado={usuarioLogueado}
        setUsuarioLogueado={setUsuarioLogueado}
      ></Menu>
      <Routes>
        <Route exact path="/" element={<Inicio></Inicio>}></Route>
        <Route
          exact
          path="/login"
          element={<Login setUsuarioLogueado={setUsuarioLogueado}></Login>}
        ></Route>
        <Route exact path="/registro" element={<Registro></Registro>}></Route>
        <Route
          exact
          path="/detalle/:id"
          element={<DetalleProducto></DetalleProducto>}
        ></Route>
        <Route
          path="/administradorproductos/*"
          element={
            <RutasProtegidas>
              <RutasAdministrador></RutasAdministrador>
            </RutasProtegidas>
          }
        ></Route>
        <Route exact path="/carrito" element={<Carrito></Carrito>}></Route>
      </Routes>
      <Footer></Footer>
    </BrowserRouter>
  );
}

export default App;
