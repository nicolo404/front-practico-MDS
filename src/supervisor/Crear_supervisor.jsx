import React from "react";
import { Link } from "react-router-dom";
import Menu from "../components/Menu";
import { post_tbl_supervisor,get_tbl_supervisor } from "../services/tbl_supervisor";
import Swal from "sweetalert2";

import "../App.css"

const Crear_supervisor = () => {
    const [data, setData] = React.useState(null);
    const [supervisor, setSupervisor] = React.useState({
        i_idsupervisor: "",
		s_rutsupervisor: "",
		s_nombresupervisor: "",
		i_pinsupervisor: "",
		i_activo: "",
		i_admin: ""
    });
    
    React.useEffect(() => {
        get_tbl_supervisor().then((response) => {
            setData(response);
        });
    }, []);
    // funcion para obtener el ultimo id de la tabla supervisor
    const ultimo_id = () => {
        if (!data) return null;
        let ultimo_id = 0;
        data.forEach((supervisor) => {
            if (supervisor.i_idsupervisor > ultimo_id) {
                ultimo_id = supervisor.i_idsupervisor;
            }
        });
        return ultimo_id;
    };

    const handleChange = (e) => {
        setSupervisor({
            ...supervisor,
            [e.target.name]: e.target.value,
        });
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        const supervisor2 = {  
            ...supervisor,
            i_idsupervisor: ultimo_id() + 1,
        };
        post_tbl_supervisor(supervisor2).then(() => {
            Swal.fire("Supervisor Creado!", "Tu supervisor ha sido creado.", "success");
            setTimeout(() => {
                window.location.href = "/tbl_supervisor";
            }, 1100);
        });
    };
    
    return (
        <div className="main">
            <Menu></Menu>
            <div className="contenido-crear-usuario">
                <h1 id="titulo-crear-update">Crear Supervisor</h1>
                <form onSubmit={handleSubmit} className="form-new-update-user">
                    <br />
                    <label>Ingrese el Rut</label>
                    <input
                        type="text"
                        name="s_rutsupervisor"
                        placeholder="Ingrese el rut"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                    <br />
                    <label>Ingrese el Nombre</label>
                    <input
                        type="text"
                        name="s_nombresupervisor"
                        placeholder="Ingrese el nombre"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                    <br />
                    <label>Ingrese el Pin</label>
                    <input
                        type="password"
                        name="i_pinsupervisor"
                        placeholder="Ingrese el pin"
                        onChange={handleChange}
                        className="input-new-update-user"
                        required
                    />
                    <br />
                    <label>Activo: </label>
                    <select
                    name="i_activo"
                    onChange={handleChange}
                    className="input-new-update-user"
                    required
                    >
                    <option value="default">Selecione Estado</option>
                    <option value={1}>1</option>
                    <option value={0}>0</option>
                    </select>
                    <br />
                    <label>Admin: </label>
                    <select
                    name="i_admin"
                    onChange={handleChange}
                    className="input-new-update-user"
                    required
                    >
                    <option value="default">Seleccione permiso</option>
                    <option value={1}>1</option>
                    <option value={0}>0</option>
                    </select>
                    <br />
                    <button type="submit" className="boton-crear-update">Crear</button>
                </form>
            </div>
        </div>
    );
};                                                                  

export default Crear_supervisor;