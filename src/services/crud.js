import axios from "axios";

const baseURL = "http://localhost:3001/api/";

const getData = async () => {
  const { data } = await axios.get(baseURL+"obtener-usuarios/");
  return data;
}

const deleteData = async (id) => {
  const { data } = await axios.delete(`${baseURL}eliminar-usuario/${id}`);
  return data;
}

const createData = async (user) => {
  const { user: response } = await axios.post("http://localhost:3001/api/crear-usuario/", user);
  return response;
}

const updateData = async (id, user) => {
  const { user: response } = await axios.put(`http://localhost:3001/api/actualizar-usuario/${id}`, user);
  return response;
}


export { getData, deleteData, createData, updateData};