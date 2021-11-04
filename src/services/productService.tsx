import axios from "axios";
import { IProduct } from "../Interfaces/product";

 const addProduct = (product: IProduct) => {
   console.log("product", product )
  return axios.post("http://localhost:8080/api/addproduct", product);
};

const getAllProducts =() => {
  return axios.get("http://localhost:8080/api/getAllProducts");
};



export default {addProduct,getAllProducts}