import React from "react";
import {updateData} from "./services/crud";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
const UpdateData = () => {
    const { id } = useParams();
    console.log(id);
    const [data, setData] = React.useState(null);

    const handleInputChange = (event) => {
        setData({
          ...data,
          [event.target.name]: event.target.value,
        });
      }

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(data)
        updateData(id, data).then(() => {
            Swal.fire("Usuario Actualizado!", "Tu usuario ha sido actualizado.", "success");
            setTimeout(() => {
                window.location.href = "/";
            }, 1200);
        });
      } 
      
    return (
        <>
            <form action="" method="post">
                <label htmlFor="">Nuevo Nombre</label>
                <input type="text" name="nombre" id="nombre" onChange={handleInputChange}/>
                <label htmlFor="">Nueva Edad</label>
                <input type="number" name="edad" id="edad" onChange={handleInputChange}/>
                <label htmlFor="">Nuevo Correo</label>
                <input type="email" name="email" id="email" onChange={handleInputChange}/>
                <button type="submit" onClick={handleSubmit}>Actualizar Usuario</button>
            </form>
        </>
    );
    }
export default UpdateData;