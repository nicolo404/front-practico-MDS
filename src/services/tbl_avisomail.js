import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_avisomail = async () => {
    const { data } = await axios.get(baseURL+"tbl_avisomail/");
    console.log(data);
    return data;
}

const get_tbl_avisomailById = async (id) => {
    const { data } = await axios.get(baseURL+"tbl_avisomail/"+id);
    console.log("get_tbl_avisomailById: ")
    console.log(data[0])
    return data[0];
}

const delete_tbl_avisomail = async (id) => {
    const { data } = await axios.delete(baseURL+"delete-tbl_avisomail/"+id);
    return data;
}

const post_tbl_avisomail = async (obj) => {
    const { data } = await axios.post(baseURL+"create-tbl_avisomail/", obj);
    console.log(data);
    return data;
}

const put_tbl_avisomail = async (id, obj) => {
    const { data } = await axios.put(baseURL+"update-tbl_avisomail/"+id, obj);
    console.log(data);
    return data;
}


export { get_tbl_avisomail, delete_tbl_avisomail, post_tbl_avisomail, get_tbl_avisomailById, put_tbl_avisomail};