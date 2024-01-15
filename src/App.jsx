import {Link } from "react-router-dom";
import {getData, deleteData, get_tbl_usuario} from "./services/crud";
import Menu from "./components/Menu";
import "./App.css"
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
    <div className="main">
    <Menu></Menu> 
    <div className="contenido">
      <h1 id="titulo-page1">Eliga una tabla a visualizar</h1>
    </div>
    </div>
  );
}

export default App