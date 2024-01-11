import React from "react";
import { useParams } from "react-router-dom";
const UpdateUsuario = () => { 
    const id = useParams();
    
    return ( 
        <h1>UpdateUsuario {id.id}</h1>
     );
}
export default UpdateUsuario;