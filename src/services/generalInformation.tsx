import axios from "axios";
import { IGeneralInfo } from "../Interfaces/generalInfo";

const getGeneralInfo = (product_id: any) => {
    return axios.post("http://localhost:8080/api/getGeneralInfo", product_id);
};


const updateGeneralInfo = (generalInfo: IGeneralInfo, prod_id: any) => {
    return axios.post("http://localhost:8080/api/updateGeneralInfo", { generalInfo, prod_id });
};

const createGeneralInfo = (generalInfo: IGeneralInfo, prod_id: any) => {
    return axios.post("http://localhost:8080/api/createGeneralInfo", { generalInfo, prod_id });
};

export default { getGeneralInfo, updateGeneralInfo, createGeneralInfo }