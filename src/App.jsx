import axios from "axios";
import {Link } from "react-router-dom";
import {getData, deleteData} from "./services/crud";
import "./App.css";
import React from "react";

const App = ()=>{
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);

  if (!data) return null;

  const BorrarUsuario = (id) => {
    deleteData(id).then(() => {
      alert("Fila Eliminada!");
    window.location.reload();
    });
  }
  //
  return (
    <div>
      <button ><Link to="crear-usuario">Crear Usuario ➕</Link></button>
      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Edad</th>
            <th>Correo</th>
            <th>Accion</th> 
          </tr>
        </thead>
        <tbody>
          {data.usuarios.map((usuario) => (
            <tr key={usuario._id}>
              <td>{usuario.nombre}</td>
              <td>{usuario.edad}</td>
              <td>{usuario.email}</td>
              <td><button  onClick={()=>{
                BorrarUsuario(usuario._id)}} 
                  >Borrar</button>
                  <button>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App