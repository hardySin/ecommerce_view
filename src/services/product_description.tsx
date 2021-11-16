import axios from "axios";
import { IGeneralInfo } from "../Interfaces/generalInfo";

const getDescription = (product_id: any) => {
    return axios.post("http://localhost:8080/api/getDescription", product_id);
};

 
export default { getDescription }