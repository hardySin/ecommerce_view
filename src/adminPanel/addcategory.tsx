import "../css/addproduct.css";
import React, {
   useState,
  useCallback,
  useRef
} from "react";
import { ICategory } from "../Interfaces/category";
import categoryService from "../services/categoryService";

// https://technext.github.io/product-admin/products.html#

const AddCategory = (): any => {
  const [category, setCategory] = useState<ICategory>(Object);
  let myform1 = useRef<any>();

  // let socket = useContext(ProductService);

  const changeHandler = (e: any) => {
    setCategory({ ...category, [e.target.name]: e.target.value });
    console.log("category ", category);
  };

  //  usecallback simillar to the use effect  only for the particular attributes not for the compounent
  const addCategory = useCallback(() => {
    categoryService.addCategory(category)
    .then((response:any)=>
    {
      myform1.current.reset();

    }).catch((error:any)=>{})
  }, [category]);

  return (
    <>
      <div className="container4">
        <h2>Add Category</h2>
        <hr />
        <form ref={myform1}>
        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label">Category Name</span>
              <input
                className="field__input"
                type="text"
                name="category"
                onChange={changeHandler}
              />
            </label>
             
          </div>
        </div>
  
         <button className="next" onClick={() => addCategory()}>
          Add Category
        </button>
        </form>
      </div>
    </>
  );
};

export default AddCategory;
