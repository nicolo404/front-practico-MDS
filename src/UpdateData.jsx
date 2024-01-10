import React from "react";
import {updateData, getDataById} from "./services/crud";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateData = () => {
    const { id } = useParams();
    const [data, setData] = React.useState(null);

    React.useEffect(() => {
        getDataById(id).then((response) => {
            console.log(response);
            setData(response);
        });
    }, [id]);
    
    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      }                                                                                                                                                                                                     

    const handleSubmit = (event) => {
        event.preventDefault();
        updateData(id, data).then(() => {
            Swal.fire("Usuario Actualizado!", "Tu usuario ha sido actualizado.", "success");
            setTimeout(() => {
                window.location.href = "/";
            }, 1100);
        });
      } 
    if (!data) return null;     
    console.log(data);                                                                                       
    return (
        <>
            <form action="" method="post">
                <label htmlFor="">Nuevo Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleInputChange} value={data.nombre}/>
                <label htmlFor="">Nueva Edad</label>
                <input type="number" name="edad" id="edad" onChange={handleInputChange} value={data.edad}/>
                <label htmlFor="">Nuevo Correo</label>
                <input type="email" name="email" id="email" onChange={handleInputChange} value={data.email}/>
                <button type="submit" onClick={handleSubmit}>Actualizar Usuario</button>
                <button><Link to="/">Cancelar Editar</Link> </button>
            </form>
        </>
    );
    }

export default UpdateData;