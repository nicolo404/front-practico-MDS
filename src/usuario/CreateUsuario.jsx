import React from "react";
import {create_tbl_usuario, get_tbl_usuario} from "../services/tbl_usuario_crud";
import "../App.css"
import Main from "../components/Menu";
import Swal from "sweetalert2";
const CreateUsuario = () => {
    const [data, setData] = React.useState(null);
    const [usuario, setUsuario] = React.useState({
        S_IDUSUARIO: "", //id
        S_PASSWD: "",  //password
        S_NBUSUARIO: "", //Nombre Ususario
    });

    React.useEffect(() => {
        get_tbl_usuario().then((response) => {
            setData(response);
            console.log(response)
        });
    }, []);

    // funcion para obtener el ultimo I_IDPERFIL y sumarle 1
    const getUltimoId = () => {
        let ultimoId = 0;
        data.forEach((usuario) => {
            if (usuario.I_IDPERFIL > ultimoId) {
                ultimoId = usuario.I_IDPERFIL;
            }
        });
        console.log("ultimo id: " + ultimoId)
        return ultimoId + 1;
    };

    const handleChange = (e) => {
        setUsuario({
            ...usuario,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();       
        // crear un nuevo usuario (objeto)
        const newUsuario = {
            ...usuario,
            I_IDPERFIL: getUltimoId(),
        };
        console.log("nuevo usuario: ")
        console.log(newUsuario)
        // enviar el objeto a la API
        create_tbl_usuario(newUsuario).then(() => {
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
            <h1 className="titulo-crear-update">Crear Usuario</h1>
            <form onSubmit={handleSubmit} className="form-new-update-user">
                <br />
                    <input
                        type="text"
                        name="S_IDUSUARIO"
                        placeholder="Ingrese el id usuario"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                <br />
                    <input
                        type="text"
                        name="S_PASSWD"
                        placeholder="Ingrese el password"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                <br />
                    <input
                        type="text"
                        name="S_NBUSUARIO"
                        placeholder="Ingrese el nombre de usuario"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                <br />
                <button type="submit" onClick={handleSubmit}>Enviar Datos</button>
            </form>
        </div>
        </div>
    );
}

export default CreateUsuario;