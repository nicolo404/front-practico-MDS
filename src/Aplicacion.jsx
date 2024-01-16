import { Routes, Route } from "react-router-dom"
import App from "./App"
import TablaUsuario from "./usuario/TablaUsuario"
import UpdateUsuario from "./usuario/UpdateUsuario"
import CreateUsuario from "./usuario/CreateUsuario"
import Tabla_tipoEntrada from "./tipo_entrada/Tabla_tipoEntrada"
import Tabla_categoriaEntrada from "./categoria_entrada/Tabla_categoriaEntrada"
import Tabla_supervisor from "./supervisor/Tabla_supervisor"
import Tabla_avisomail from "./avisomail/Tabla_avisomail"
import Tabla_parametro from "./parametro/Tabla_parametro" 

function Aplicacion() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="tbl_usuario" element={ <TablaUsuario /> } />
        <Route path='tbl_usuario/editar-usuario/:id' element={ <UpdateUsuario /> } />
        <Route path='tbl_usuario/crear-usuario' element={ <CreateUsuario /> } />
        <Route path="tbl_tipoentrada" element={ <Tabla_tipoEntrada/> } />
        <Route path="tbl_categoriaentrada" element={ <Tabla_categoriaEntrada/> } />
        <Route path="tbl_supervisor" element={ <Tabla_supervisor/> } />
        <Route path="tbl_avisomail" element={ <Tabla_avisomail/> } />
        <Route path="tbl_parametro" element={ <Tabla_parametro/> } />
      </Routes>
    </div>
  )
}

export default Aplicacion