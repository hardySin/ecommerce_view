import axios from "axios";
import { IProduct } from "../Interfaces/product";

 const addProduct = (product: IProduct) => {
   console.log("product", product )
  return axios.post("http://localhost:8080/api/addproduct", product);
};

const getAllProducts =() => {
  return axios.get("http://localhost:8080/api/getAllProducts");
};

const getProduct =(product_id:any) => {
  console.log("product_id", product_id)
   return axios.post("http://localhost:8080/api/getProduct", product_id);
};
 



export default {addProduct,getAllProducts,getProduct}