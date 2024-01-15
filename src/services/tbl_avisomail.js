import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_avisomail = async () => {
    const { data } = await axios.get(baseURL+"tbl_avisomail/");
    console.log(data);
    return data;
}

export { get_tbl_avisomail};