import "../../css/addproduct.css";
import React, { useRef, useState } from "react";
 import { IProduct } from "../../Interfaces/product";
 
const Product = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
 
  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

 
  return (
    <>
      <div className="container4">
        <h2>Add Product</h2>
        <hr />

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
        <button className="next">Add Products</button>
</div>
     </>
  );
};

export default Product;
