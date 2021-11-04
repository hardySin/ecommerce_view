import axios from "axios";
import { ICategory } from "../Interfaces/category";

 const addCategory = (category: ICategory) => {
  return axios.post("http://localhost:8080/api/addCategory", category);
};

const getAllCategory = () => {
    return axios.get("http://localhost:8080/api/getAllCategory");
  };  
  

export default {addCategory,getAllCategory}