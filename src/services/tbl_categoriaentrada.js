import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_categoriaentrada = async () => {
    const { data } = await axios.get(baseURL+"tbl_categoriaentrada/");
    return data;
}

const get_tbl_categoriaentradaById = async (id) => {
    console.log("id: "+id);
    const { data } = await axios.get(baseURL+"only_one-tbl_categoriaentrada/"+id);
    console.log("data: ");
    console.log(data);
    return data;
}

const put_tbl_categoriaentrada = async (id, obj) => {
    const { data } = await axios.put(baseURL+"update-tbl_categoriaentrada/"+id, obj);
    console.log(data);
    return data;
}

export { get_tbl_categoriaentrada, get_tbl_categoriaentradaById, put_tbl_categoriaentrada};