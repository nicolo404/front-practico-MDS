import axios from "axios";

const baseURL = "http://localhost:3001/api/"; 

const get_tbl_supervisor = async () => {
    const { data } = await axios.get(baseURL+"tbl_supervisor/");
    console.log(data);
    return data;
}

export { get_tbl_supervisor};