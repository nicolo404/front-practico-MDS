import axios from "axios";

const baseURL = "http://localhost:3001/api/"; 

const get_tbl_supervisor = async () => {
    const { data } = await axios.get(baseURL+"tbl_supervisor/");
    console.log(data);
    return data;
}
const get_tbl_supervisorById = async (id) => {
    const { data } = await axios.get(baseURL+"tbl_supervisor/"+id);
    console.log(data);
    return data;
}
const post_tbl_supervisor = async (obj) => {
    console.log(obj);
    const { data } = await axios.post(baseURL+"crear-tbl_supervisor/", obj);
    console.log(data);
    return data;
}
const put_tbl_supervisor = async (id, obj) => {
    const { data } = await axios.put(baseURL+"update-tbl_supervisor/"+id, obj);
    console.log(data);
    return data;
}
const delete_tbl_supervisor = async (id) => {
    const { data } = await axios.delete(baseURL+"delete-tbl_supervisor/"+id);
    console.log(data);
    return data;
}


export { get_tbl_supervisor, get_tbl_supervisorById, post_tbl_supervisor, put_tbl_supervisor, delete_tbl_supervisor};