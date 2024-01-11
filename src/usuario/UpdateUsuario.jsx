import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { update_tbl_usuario, get_tbl_usuarioById } from "../services/tbl_usuario_crud";
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
      }, 1100);
    });
  };
  return (
    <div>
      <h1>Editar Usuario</h1>
      <form onSubmit={handleSubmit}>
        <label>
          I_IDPERFIL:
          <input type="text" name="I_IDPERFIL" value={usuario.I_IDPERFIL} onChange={handleChange} />
        </label>
        <br />
        <label>
          S_IDUSUARIO:
          <input type="text" name="S_IDUSUARIO" value={usuario.S_IDUSUARIO} onChange={handleChange} />
        </label>
        <br />
        <label>
          S_PASSWD:
          <input type="text" name="S_PASSWD" value={usuario.S_PASSWD} onChange={handleChange} />
        </label>
        <br />
        <label>
          S_NBUSUARIO:
          <input type="text" name="S_NBUSUARIO" value={usuario.S_NBUSUARIO} onChange={handleChange} />
        </label>
        <br />
        <button type="submit">Actualizar Usuario</button>
      </form>
    </div>
  );
};

export default UpdateUsuario;