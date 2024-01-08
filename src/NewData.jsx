import React from 'react';
const NewUser= ()=>{
    return(
        <div>
            <form>
                <label>Nombre</label>
                <input type="text" name="nombre" placeholder="Nombre"/>
                <label>Edad</label>
                <input type="number" name="edad" placeholder="Edad"/>
                <label>Correo</label>
                <input type="email" name="email" placeholder="Correo"/>
                <button type="submit">Crear Usuario ➕</button>
            </form>
        </div>
    )
}

export default NewUser;