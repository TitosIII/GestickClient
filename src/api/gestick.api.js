import axios from "axios";

const serverURL = import.meta.env.VITE_URL || "http://localhost:3000";

export const getAdminRequest = async () => {
  return await axios.get(`${serverURL}/TitosChampionsSonicAdrianJoshuaGael`);
};

export const createAdminRequest = async (data) =>
  await axios.post(`${serverURL}/signAdministrador`, data);

export const deleteAdmins = async (idAdmin) => {
  await axios.delete(
    `${serverURL}/TitosChampionsSonicAdrianJoshuaGael/${idAdmin}`
  );
};

export const getAdminsRequest = async (idAdmin) =>
  await axios.get(`${serverURL}/EditarAdministrador/${idAdmin}`);

export const updateAdminRequest = async (idAdmin, newFieldAdmin) =>
  await axios.put(`${serverURL}/EditarAdministrador/${idAdmin}`, newFieldAdmin);

export const logAdmin = async (data) =>
  await axios.post(`${serverURL}/loginAdiministrador`, data);

export const logEmp = async (data) =>
  await axios.post(`${serverURL}/logEmpleado`, data);

export const signEmp = async (data) =>
  await axios.post(`${serverURL}/signEmpleado`, data);

export const uploadImage = async (data) =>
  await axios.post(
    "https://api.cloudinary.com/v1_1/dkhzhsqzh/image/upload",
    data
  );

export const getProducts = async (data) =>
  await axios.post(`${serverURL}/inventario`, data);

export const getEmp = async (data) =>
  await axios.post(`${serverURL}/getEmpleados`, data);

export const addProduct = async (data) =>
  await axios.post(`${serverURL}/addProduct`, data);

export const procesSale = async (data) =>
  await axios.post(`${serverURL}/procesSale`, data);

export const deleteEmpleado = async (data) =>
  await axios.post(`${serverURL}/deleteEmpleado`, data);

export const getAnEmp = async (data) =>
  await axios.post(`${serverURL}/getAnEmp`, data);

export const modifyEmp = async (data) =>
  await axios.post(`${serverURL}/modifyEmp`, data);

export const getAProduct = async (data) =>
  await axios.post(`${serverURL}/getAProduct`, data);

export const modifyProduct = async (data) =>
  await axios.post(`${serverURL}/modifyProduct`, data);

export const deleteProduct = async (data) =>
  await axios.post(`${serverURL}/deleteProduct`, data);

export const dashboardDUENNO = async (data) =>
  await axios.post(`${serverURL}/EstadoGeneralAdmin`, data);

export const dashboardADMIN = async (data) =>
  await axios.post(`${serverURL}/GraficasGestick`, data);

export const ventas = async (data) =>
  await axios.post(`${serverURL}/Ventas`, data);

export const getTradeMark = async () =>
  await axios.get(`${serverURL}/getTradeMark`);

export const historyPRODUCT = async (data) =>
  await axios.get(`${serverURL}/historialVENTA`, data);
