import "../../css/addproduct.css";
import React, { useRef, useEffect, useState } from "react";
import { IProduct } from "../../Interfaces/product";
import { useLocation } from "react-router-dom";
import product_description from "../../services/product_description";

const ProductDescription = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
  const location: any = useLocation();

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  useEffect(() => {

    let prod_id = location.state.product_id;
    console.log(typeof prod_id, prod_id)
    product_description.getDescription(prod_id)
      .then((response: any) => {
        console.log("response", response.data)
      }).catch((error: any) => {

      })
  }, [location]);

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
        {(location.pathname == "/view" ? "" : <button className="next">Edit Description</button>)}
      </div>
    </>
  );
};

export default ProductDescription;
