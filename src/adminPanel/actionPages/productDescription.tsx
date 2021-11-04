import "../../css/addproduct.css";
import React, { useRef, useState } from "react";
import { IProduct } from "../../Interfaces/product";

const ProductDescription = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  return (
    <>
      <div className="container4">
        <h2>Product Description</h2>
        <hr />
        <div className="form">
          <div className="fields fields--1">
            <label className="field">
              <span className="field__label">Description</span>
              <input
                className="field__input"
                type="text"
                name="description"
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
                name="metatitle"
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
        <button className="next">Add Description</button>
      </div>
    </>
  );
};

export default ProductDescription;
