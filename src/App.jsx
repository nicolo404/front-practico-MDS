import {Link } from "react-router-dom";
import {getData, deleteData, get_tbl_usuario} from "./services/crud";
import "./App.css";
import React from "react";
import Swal from "sweetalert2";

const App = ()=>{
  const [data, setData] = React.useState(null);
  
  React.useEffect(() => {
    get_tbl_usuario().then((response) => {
      console.log(response);
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
      <h1>Tabla tbl_usuario</h1>
      <button ><Link to="crear-usuario">Crear Usuario ➕</Link></button>
      <br/>
      <table>
        <thead>
          <tr>
            <th>I_IDPERFIL</th>
            <th>S_IDUSUARIO</th>
            <th>S_PASSWD</th>
            <th>S_NBUSUARIO</th>
            <th></th> 
          </tr>
        </thead>
        <tbody>
          {data.map((usuario) => (
            console.log(usuario),
            <tr key={usuario.I_IDPERFIL}>
              <td>{usuario. I_IDPERFIL}</td>
              <td>{usuario.S_IDUSUARIO}</td>
              <td>{usuario.S_PASSWD}</td>
              <td>{usuario.S_NBUSUARIO}</td>
              <td>
                  <button><Link to={`editar-usuario/${usuario._id}`}>Editar</Link></button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button><Link to="tbl_usuario">Ir a tbl_usuario</Link></button>
      <button><Link to="tbl_tipoentrada">Ir a tbl_tipoentrada</Link></button>
      <button><Link to="tbl_categoriaentrada">Ir a tbl_categoriaentrada</Link></button>
    </div>
  );
}

export default App