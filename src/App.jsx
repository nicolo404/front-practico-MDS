import {Link } from "react-router-dom";
import {getData, deleteData} from "./services/crud";
import "./App.css";
import React from "react";
import Swal from "sweetalert2";

const App = ()=>{
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    getData().then((response) => {
      setData(response);
    });
  }, []);

  if (!data) return null;

  const BorrarUsuario = (id) => {
    Swal.fire({
      title: "¿Estas seguro?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Si, borrar!",
      cancelButtonText: "No, cancelar!",
    }).then((result) => {
      if (result.isConfirmed) {
        deleteData(id).then(() => {
          Swal.fire("Borrado!", "Tu usuario ha sido borrado.", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1200);
        });
      } else if (result.dismiss === Swal.DismissReason.cancel) {
        Swal.fire("Cancelado", "Tu usuario esta a salvo :)", "error");
      }
    });
  }

  return (
    <div>
      <button ><Link to="crear-usuario">Crear Usuario ➕</Link></button>
      <br/>
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
                  <button><Link to={`editar-usuario/${usuario._id}`}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App