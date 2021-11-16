import "../../css/addproduct.css";
import React, { useRef, useEffect,useState } from "react";
import { IProduct } from "../../Interfaces/product";
import { useLocation } from "react-router-dom";
import productSerivce  from "../../services/productService";
const Product = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
  const location:any = useLocation();

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  useEffect(() => {

    let prod_id = location.state.product_id;

    console.log(typeof prod_id ,prod_id) 
    productSerivce.getProduct(prod_id)
    .then((response:any)=>
    {
        console.log("response" ,response.data)
    }).catch((error:any)=>{

    })
 }, [location]);

  return (
    <>
      <div className="container4">
        <h2>Product</h2>
        <hr/>

        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label">Product Name</span>
              <input
                className="field__input"
                type="text"
                name="productname"
                onChange={changeHandler}
              />
            </label>
            <label className="field">
              <span className="field__label">Sub Text</span>
              <input
                className="field__input"
                type="text"
                name="subtext"
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
                <option value="volvo">Volvo</option>
                <option value="saab">Saab</option>
                <option value="mercedes">Mercedes</option>
                <option value="audi">Audi</option>
              </select>
            </label>

            <label className="field">
              <span className="field__label">Status</span>
              <select
                className="field__input"
                name="status"
                onChange={changeHandler}
              >
                <option value="Published">Published</option>
                <option value="Draft">Draft</option>
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
        {(location.pathname=="/view" ?"":<button className="next">Edit Product</button>) }
       </div>
    </>
  );
};

export default Product;
