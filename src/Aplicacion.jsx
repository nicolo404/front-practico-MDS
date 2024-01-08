import { Routes, Route } from "react-router-dom"
import App from "./App"
import NewData from "./NewData"
import UpdateData from "./UpdateData"

function Aplicacion() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="crear-usuario" element={ <NewData/> } />
        <Route path='editar-usuario/:id' element={ <UpdateData /> } />
      </Routes>
    </div>
  )
}

export default Aplicacion