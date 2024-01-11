import React from "react";
import {create_tbl_usuario} from "../services/tbl_usuario_crud";
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
            }, 1200);
        });
    }
    return (
        <div>
            <h1>Crear Usuario</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    I_IDPERFIL:
                    <input
                        type="text"
                        name="I_IDPERFIL"
                        value={usuario.I_IDPERFIL}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    S_IDUSUARIO:
                    <input
                        type="text"
                        name="S_IDUSUARIO"
                        value={usuario.S_IDUSUARIO}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    S_PASSWD:
                    <input
                        type="text"
                        name="S_PASSWD"
                        value={usuario.S_PASSWD}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <label>
                    S_NBUSUARIO:
                    <input
                        type="text"
                        name="S_NBUSUARIO"
                        value={usuario.S_NBUSUARIO}
                        onChange={handleChange}
                    />
                </label>
                <br />
                <button>Crear Usuario</button>
            </form>
        </div>
    );
}

export default CreateUsuario;