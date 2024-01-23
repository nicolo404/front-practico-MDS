import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_avisomail = async () => {
    const { data } = await axios.get(baseURL+"tbl_avisomail/");
    console.log(data);
    return data;
}
const delete_tbl_avisomail = async (id) => {
    const { data } = await axios.delete(baseURL+"delete-tbl_avisomail/"+id);
    return data;
}

const post_tbl_avisomail = async (data) => {
    const response = await axios.post(baseURL+"tbl_avisomail/", data);
    return response.data;
}


export { get_tbl_avisomail, delete_tbl_avisomail, post_tbl_avisomail};