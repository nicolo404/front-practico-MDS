import { Routes, Route } from "react-router-dom"
import App from "./App"
import NewData from "./NewData"
import UpdateData from "./UpdateData"
import TablaUsuario from "./usuario/TablaUsuario"
import UpdateUsuario from "./usuario/UpdateUsuario"

function Aplicacion() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="crear-usuario" element={ <NewData/> } />
        <Route path='editar-usuario/:id' element={ <UpdateData /> } />
        <Route path="tbl_usuario" element={ <TablaUsuario/> } />
        <Route path='tbl_usuario/editar-usuario/:id' element={ <UpdateUsuario /> } />
      </Routes>
    </div>
  )
}

export default Aplicacion