import "../css/addproduct.css";
import React, {
  useEffect,
  useRef,
  useContext,
  useState,
  useCallback,
} from "react";
import { Divider } from "primereact/divider";
import { IProduct } from "../Interfaces/product";
import productService from "../services/productService";
import categoryService from "../services/categoryService";

// https://technext.github.io/product-admin/products.html#

const AddProduct = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);

  let category = useRef<Array<any>>([]);
  let myform1 = useRef<any>();
  let myform2 = useRef<any>();

  // let socket = useContext(ProductService);

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);

  };


  useEffect(() => {
    categoryService.getAllCategory()
      .then((response: any) => {
        const data: Array<any> = response.data.result;
        category.current = data;
      })
      .catch((error: any) => { });
  }, []);

  const addProduct = () => {
    console.log("product useCallback", product)
    productService.addProduct(product)
      .then((response: any) => {
        myform1.current.reset();
        myform2.current.reset();

      })
      .catch((error: any) => { });
  }

  return (
    <>
         <form ref={myform1}>
          <div className="form">
            <div className="fields fields--2">
              <label className="field">
                <span className="field__label">Product Name</span>
                <input
                  className="field__input"
                  type="text"
                  name="productName"
                  onChange={changeHandler}
                />
              </label>
              <label className="field">
                <span className="field__label">Sub Text</span>
                <input
                  className="field__input"
                  type="text"
                  name="subText"
                  onChange={changeHandler}
                />
              </label>
            </div>

            <div className="fields fields--2">
              <label className="field">
                <span className="field__label">Category</span>
                <select
                  className="field__input"
                  name="category"
                  onChange={changeHandler}
                >
                  <option disabled selected>Select the Category</option>
                  {category.current.map((item: any) => (
                    <option key={item._id} value={item._id}>
                      {item.categoryName}
                    </option>
                  ))}
                </select>
              </label>

              <label className="field">
                <span className="field__label">Status</span>
                <select
                  className="field__input"
                  name="status"
                  onChange={changeHandler}
                >
                  <option disabled >Select the Category</option>
                  <option value="Published" >Published</option>
                  <option selected value="Draft">Draft</option>
                </select>
              </label>
            </div>

            <div className="fields fields--2">
              <label className="field">
                <span className="field__label">Price </span>
                <input
                  className="field__input"
                  type="text"
                  name="price"
                  onChange={changeHandler}
                />
              </label>
              <label className="field">
                <span className="field__label">Discount</span>
                <input
                  className="field__input"
                  type="text"
                  name="discount"
                  onChange={changeHandler}
                />
              </label>
            </div>
          </div>
        </form>
        <Divider />

           <hr />
          <form ref={myform2}>
            <div className="form">
              <div className="fields fields--1">
                <label className="field">
                  <span className="field__label">Description</span>
                  <input
                    className="field__input"
                    type="text"
                    name="productDescription"
                    onChange={changeHandler}
                  />
                </label>
              </div>

              <div className="fields fields--2">
                <label className="field">
                  <span className="field__label">Meta Title</span>
                  <input
                    className="field__input"
                    type="text"
                    name="metaTitle"
                    onChange={changeHandler}
                  />
                </label>
                <label className="field">
                  <span className="field__label">Meta Keyword</span>
                  <input
                    className="field__input"
                    type="text"
                    name="metaKeyword"
                    onChange={changeHandler}
                  />
                </label>
              </div>
            </div>
          </form>
 
        <button className="next" onClick={() => addProduct()}>
          Add Products
        </button>
     </>
  );
};

export default AddProduct;
