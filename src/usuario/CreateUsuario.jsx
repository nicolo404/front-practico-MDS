import React from "react";
import {create_tbl_usuario} from "../services/tbl_usuario_crud";
import "../App.css"
import Main from "../components/Menu";
import Swal from "sweetalert2";
const CreateUsuario = () => {
    const [usuario, setUsuario] = React.useState({
        I_IDPERFIL: "",
        S_IDUSUARIO: "",
        S_PASSWD: "",
        S_NBUSUARIO: "",
    });
    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        create_tbl_usuario(usuario).then(() => {
            Swal.fire("Usuario Creado!", "Tu usuario ha sido creado.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_usuario";
            }, 1100);
        });
    }
    return (
        <div className="main">
        <Main></Main>
        <div className="contenido-crear-usuario">
            <h1 class="titulo-crear-update">Crear Usuario</h1>
            <form onSubmit={handleSubmit} className="form-new-update-user">
                    <input
                        type="text"
                        name="I_IDPERFIL"
                        placeholder="Ingrese el I_IDPERFIL"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                <br />
                    <input
                        type="text"
                        name="S_IDUSUARIO"
                        placeholder="Ingrese el S_IDUSUARIO"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                <br />
                    <input
                        type="text"
                        name="S_PASSWD"
                        placeholder="Ingrese el S_PASSWD"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                <br />
                    <input
                        type="text"
                        name="S_NBUSUARIO"
                        placeholder="Ingrese el S_NBUSUARIO"
                        onChange={handleChange}
                        className="input-new-update-user"
                    />
                <br />
                <button>Crear Usuario</button>
            </form>
        </div>
        </div>
    );
}

export default CreateUsuario;