import React from 'react';
import { useState } from "react";
import "./NewData.css"
import {createData} from "./services/crud";
import Swal from 'sweetalert2';
const NewData= () => {

    const [user,setUser] = useState({
        nombre:" ",
        edad:" ",
        email:" "
      })

    const handleInputChange = (event) => {
        setUser({
          ...user,
          [event.target.name]: event.target.value,
        });
      }
    
    const handleSubmit = (event) => {
        event.preventDefault();
        createData(user).then(() => {
          Swal.fire("Usuario Creado!", "Tu usuario ha sido creado.", "success");
          setTimeout(() => {
            window.location.href = "/";
          }, 1200);
        });
      }

    return(
        <div>
            <form>
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Nombre" onChange={handleInputChange}/>
                <label>Edad</label>
                <input type="number" name="edad" placeholder="Edad" onChange={handleInputChange}/>
                <label>Correo</label>
                <input type="email" name="email" placeholder="Correo" onChange={handleInputChange}/>
                <button type="submit" onClick={handleSubmit}>Crear Usuario ➕</button>
            </form>
        </div>
    )
}

export default NewData;