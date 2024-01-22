import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_categoriaentrada = async () => {
    const { data } = await axios.get(baseURL+"tbl_categoriaentrada/");
    return data;
}

const get_tbl_categoriaentradaById = async (id) => {
    const { data } = await axios.get(baseURL+"only_one-tbl_categoriaentrada/"+id);
    return data[0];
}

const put_tbl_categoriaentrada = async (id, obj) => {
    console.log("datos put: ");
    console.log(id);
    console.log(obj);
    const { data } = await axios.put(baseURL+"update-tbl_categoriaentrada/"+id, obj);
    console.log("respuesta:");
    console.log(data);
    return data;
}

const post_tbl_categoriaentrada = async (obj) => {
    const { data } = await axios.post(baseURL+"crear-tbl_categoriaentrada/", obj);
    return data;
}
const delete_tbl_categoriaentrada = async (id) => {
    const { data } = await axios.delete(baseURL+"delete-tbl_categoriaentrada/"+id);
    return data;
}

export { get_tbl_categoriaentrada, get_tbl_categoriaentradaById, put_tbl_categoriaentrada, post_tbl_categoriaentrada, delete_tbl_categoriaentrada};