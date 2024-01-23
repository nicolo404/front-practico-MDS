import React from "react";
import { useParams } from "react-router-dom";
const Update_avisomail = () => {
    const{ id } = useParams();
    return (
        <div>Update {id}</div>
    )
}

export default Update_avisomail;