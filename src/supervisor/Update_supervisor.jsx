import React from "react";
import { useParams } from "react-router-dom";
import Main from "../components/Menu";
import { put_tbl_supervisor, get_tbl_supervisorById } from "../services/tbl_supervisor";
import Swal from "sweetalert2";
import "../App.css"

const Update_supervisor = () => {
    const { id } = useParams();
    const [supervisor, setSupervisor] = React.useState({
        i_idsupervisor: "",
        s_rutsupervisor: "",
        s_nombresupervisor: "",
        i_pinsupervisor: "",
        i_activo: "",
        i_admin: ""
    });
    
    React.useEffect(() => {
        get_tbl_supervisorById(id).then((response) => {
        setSupervisor(response);
        console.log(response)
        });
    }, [id]);
    const handleChange = (e) => {
        setSupervisor({
        ...supervisor,
        [e.target.name]: e.target.value,
        });
    };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        put_tbl_supervisor(id, supervisor).then(() => {
        Swal.fire("Supervisor Actualizado!", "Tu supervisor ha sido actualizado.", "success");
        setTimeout(() => {
            window.location.href = "/tbl_supervisor";
        }, 1050);
        });
    };

    if (!supervisor) return null;
    return (
        <div className="main">
        <Main></Main>
        <div className="contenido-crear-usuario">
        <h1 className="titulo-crear-update">Editar Supervisor</h1>
        <form onSubmit={handleSubmit} className="form-new-update-user ">
            <label>
            ID Supervisor:
            </label>
            <input type="text" name="i_idsupervisor" value={supervisor.i_idsupervisor} onChange={handleChange} className="input-new-update-user"/>
            <br />
            <label>
            Rut Supervisor:
            </label>
            <input type="text" name="s_rutsupervisor" value={supervisor.s_rutsupervisor} onChange={handleChange} className="input-new-update-user"/>
            <br />
            <label>
            Nombre Supervisor:
            </label>
            <input type="text" name="s_nombresupervisor" value={supervisor.s_nombresupervisor} onChange={handleChange} className="input-new-update-user"/>
            <br />
            <label>
            Pin Supervisor:
            </label>
            <input type="text" name="i_pinsupervisor" value={supervisor.i_pinsupervisor} onChange={handleChange} className="input-new-update-user"/>
            <br />
            <label>
            Activo:
            </label>
            <input type="text" name="i_activo" value={supervisor.i_activo} onChange = {handleChange} className="input-new-update-user"/>
            <br />
            <label>
            Admin:
            </label>
            <input type="text" name="i_admin" value={supervisor.i_admin} onChange={handleChange} className="input-new-update-user"/>
            <br />
            <button type="submit">Actualizar Supervisor</button>
        </form>
        </div>
        </div>
    );
}

export default Update_supervisor;