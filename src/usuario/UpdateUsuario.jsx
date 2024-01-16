import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { update_tbl_usuario, get_tbl_usuarioById } from "../services/tbl_usuario_crud";
import "../App.css"
import Main from "../components/Menu";
import Swal from "sweetalert2";

const UpdateUsuario = () => {
  const { id } = useParams();
  const [usuario, setUsuario] = React.useState({
    I_IDPERFIL: "",
    S_IDUSUARIO: "",
    S_PASSWD: "",
    S_NBUSUARIO: "",
  });

  React.useEffect(() => {
    get_tbl_usuarioById(id).then((response) => {
      setUsuario(response);
    });
  }, [id]);
  const handleChange = (e) => {
    setUsuario({
      ...usuario,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    update_tbl_usuario(id, usuario).then(() => {
      Swal.fire("Usuario Actualizado!", "Tu usuario ha sido actualizado.", "success");
      setTimeout(() => {
        window.location.href = "/tbl_usuario";
      }, 1050);
    });
  };
  return (
    <div className="main">
    <Main></Main>
    <div className="contenido-crear-usuario">
      <h1 className="titulo-crear-update">Editar Usuario</h1>
      <form onSubmit={handleSubmit} className="form-new-update-user ">
        <label>
          I_IDPERFIL:
        </label>
          <input type="text" name="I_IDPERFIL" value={usuario.I_IDPERFIL} onChange={handleChange} className="input-new-update-user"/>
        <br />
        <label>
          S_IDUSUARIO:
        </label>
          <input type="text" name="S_IDUSUARIO" value={usuario.S_IDUSUARIO} onChange={handleChange} className="input-new-update-user"/>
        <br />
        <label>
          S_PASSWD:
        </label>
          <input type="text" name="S_PASSWD" value={usuario.S_PASSWD} onChange={handleChange} className="input-new-update-user"/>
        <br />
        <label>
          S_NBUSUARIO:
        </label>
          <input type="text" name="S_NBUSUARIO" value={usuario.S_NBUSUARIO} onChange={handleChange} className="input-new-update-user"/>
        <br />
        <button type="submit">Actualizar Usuario</button>
      </form>
    </div>
    </div>
  );
};

export default UpdateUsuario;