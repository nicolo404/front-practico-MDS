import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_usuario = async () => {
    const { data } = await axios.get(baseURL+"tbl_usuario/");
    return data;
}
const get_tbl_usuarioById = async (id) => {
    const { data } = await axios.get(`${baseURL}tbl_usuario/${id}`);
    return data;
}
const delete_tbl_usuario = async (id) => {
    const { data } = await axios.delete(`${baseURL}delete-tbl_usuario/${id}`);
    return data;
}

const create_tbl_usuario = async (tbl_usuario) => {
    const { tbl_usuario: response } = await axios.post(`${baseURL}crear-tbl_usuario`, tbl_usuario);
    return response;
}
const update_tbl_usuario = async (id, tbl_usuario) => {
    const { tbl_usuario: response } = await axios.put(`${baseURL}update-tbl_usuario/${id}`, tbl_usuario);
    return response;
}

export { get_tbl_usuario, get_tbl_usuarioById , delete_tbl_usuario, create_tbl_usuario, update_tbl_usuario};


