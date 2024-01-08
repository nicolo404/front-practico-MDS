import axios from "axios";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import React from "react";
//api
const baseURL = "http://localhost:3001/api/";

const App = ()=>{
  const [data, setData] = React.useState(null);
  React.useEffect(() => {
    axios.get(baseURL+'obtener-usuarios').then((response) => {
      setData(response.data);
      console.log(response.data.usuarios);
    });
  }, []);

  if (!data) return null;

  const BorrarUsuario = (id) => {
    axios.delete(baseURL + "/eliminar-usuario/" + id).then((response) => {
      console.log(response.data.mensaje);
      alert("Fila Eliminada!");
    window.location.reload();
    });
  };
  //
  return (
    <div>
      <h1>Usuarios</h1>
      <button >Crear Usuario ➕</button>
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
            <tr key={usuario.id}>
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