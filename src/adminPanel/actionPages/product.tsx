import "../../css/addproduct.css";
import React, { useRef, useEffect, useState } from "react";
import { IProduct } from "../../Interfaces/product";
import { useLocation } from "react-router-dom";
import productSerivce from "../../services/productService";
import categoryService from "../../services/categoryService";
const Product = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
  const location: any = useLocation();
  let productName = useRef<any>();
  let subText = useRef<any>();
  let status = useRef<any>();
  let price = useRef<any>();
  let discount = useRef<any>();
  let categoryName = useRef<any>();
  let category = useRef<Array<any>>([]);

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  useEffect(() => {

    let prod_id = location.state.product_id;

    console.log(typeof prod_id, prod_id)
    productSerivce.getProduct(prod_id)
      .then((response: any) => {
        console.log("response", response.data)
        productName.current.value = response.data[0].productName;
        subText.current.value = response.data[0].subText;
        status.current.value = response.data[0].status
        price.current.value = response.data[0].price
        discount.current.value = response.data[0].discount
        categoryName.current = response.data[0].category_id.categoryName;
      }).catch((error: any) => {
      })
    categoryService.getAllCategory()
      .then((response: any) => {
        const data: Array<any> = response.data.result;
        category.current = data;
      })
      .catch((error: any) => { });

  }, [location]);

  return (
    <>
      <div className="container4">
        <h2>Product</h2>
        <hr />

        <div className="form">
          <div className="fields fields--2">
            <label className="field">
              <span className="field__label">Product Name</span>
              <input
                ref={productName}
                className="field__input"
                type="text"
                name="productname"
                onChange={changeHandler}
              />
            </label>
            <label className="field">
              <span className="field__label">Sub Text</span>
              <input
                ref={subText}
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
                ref={categoryName}
                className="field__input"
                name="category"
                onChange={changeHandler}
              >
                <option disabled>Select the Category</option>

                {category.current.map((item: any) => (
                  (item.categoryName == categoryName.current) ?
                    <option selected key={item._id} value={item._id}>
                      {item.categoryName}
                    </option>
                    : <option key={item._id} value={item._id}>
                      {item.categoryName}
                    </option>
                ))}
              </select>
            </label>

            <label className="field">
              <span className="field__label">Status</span>
              <select
                ref={status}
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
                ref={price}
                className="field__input"
                type="text"
                name="price"
                onChange={changeHandler}
              />
            </label>
            <label className="field">
              <span className="field__label">Discount</span>
              <input
                ref={discount}
                className="field__input"
                type="text"
                name="discount"
                onChange={changeHandler}
              />
            </label>
          </div>
        </div>
        {(location.pathname == "/view" ? "" : <button className="next">Edit Product</button>)}
      </div>
    </>
  );
};

export default Product;
