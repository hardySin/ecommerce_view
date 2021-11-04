import "../../css/addproduct.css";
import React, { useRef, useState } from "react";
import { IProduct } from "../../Interfaces/product";

const ProductGerenalInfo = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  return (
    <>
      <div className="container4">
        <h2>General Information</h2>
        <hr />
        <div className="form">
          <div className="fields fields--1">
            <label className="field">
              <span className="field__label">Brand Name</span>
              <input
                className="field__input"
                type="text"
                name="brandname"
                onChange={changeHandler}
              />
            </label>
          </div>
        </div>  
        <button className="next">Add Information</button>
      </div>
    </>
  );
};

export default ProductGerenalInfo;
