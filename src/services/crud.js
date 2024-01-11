import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const getData = async () => {
  const { data } = await axios.get(baseURL+"obtener-usuarios/");
  return data;
}

const getDataById = async (id) => {
  const { data } = await axios.get(`${baseURL}obtener-usuario/${id}`);
  return data.usuario;
}

const deleteData = async (id) => {
  const { data } = await axios.delete(`${baseURL}eliminar-usuario/${id}`);
  return data;
}

const createData = async (user) => {
  const { user: response } = await axios.post(`${baseURL}crear-usuario/`, user);
  return response;
}

const updateData = async (id, user) => {
  const { user: response } = await axios.put(`${baseURL}actualizar-usuario/${id}`, user);
  return response;
}

const get_tbl_usuario = async () => {
  const { data } = await axios.get(baseURL+"tbl_usuario/");
  return data;
}

export { getData, deleteData, createData, updateData, getDataById, get_tbl_usuario};