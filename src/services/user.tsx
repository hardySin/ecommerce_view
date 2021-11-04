import axios from "axios";
import { IUser } from "../Interfaces/user";

 const createUser = (user: IUser) => {
   console.log("user " ,user);
  return axios.post("http://localhost:8080/api/createUser", user);
};
 
export default {createUser}