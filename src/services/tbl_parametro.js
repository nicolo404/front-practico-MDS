import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const get_tbl_parametro = async () => {
    const { data } = await axios.get(baseURL+"tbl_parametro/");
    return data;
}

export { get_tbl_parametro};