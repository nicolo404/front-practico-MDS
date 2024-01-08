import React from 'react';
import { useState } from "react";
import {Link } from "react-router-dom";
import "./NewData.css"
import {createData} from "./services/crud";

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
          alert("Usuario Creado!");
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
                <button><Link to="/">Volver</Link></button>
            </form>
        </div>
    )
}

export default NewData;