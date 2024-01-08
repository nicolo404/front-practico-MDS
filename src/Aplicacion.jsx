import { Routes, Route } from "react-router-dom"
import App from "./App"
import NewData from "./NewData"

function Aplicacion() {
  return (
    <div className="Aplicacion">
      <Routes>
        <Route path="/" element={ <App/> } />
        <Route path="crear-usuario" element={ <NewData/> } />
      </Routes>
    </div>
  )
}

export default Aplicacion