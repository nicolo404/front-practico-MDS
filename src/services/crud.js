import axios from "axios";

const getData = async () => {
  const { data } = await axios.get("http://localhost:3001/api/obtener-usuarios/");
  return data;
}

const deleteData = async (id) => {
  const { data } = await axios.delete(`http://localhost:3001/api//eliminar-usuario/${id}`);
  return data;
}

module.exports = { getData, deleteData };