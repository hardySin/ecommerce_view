import axios from "axios";
import { IProductImage } from "../Interfaces/productImage";

const getProductImage = (product_id: any) => {
     return axios.post("http://localhost:8080/api/getProductImage", product_id);
};

export default { getProductImage }