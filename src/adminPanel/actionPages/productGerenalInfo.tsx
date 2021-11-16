import "../../css/addproduct.css";
import React, { useRef, useEffect, useState } from "react";
import { IProduct } from "../../Interfaces/product";
import { useLocation } from "react-router-dom";
import generalInformation from "../../services/generalInformation";
import { IGeneralInfo } from "../../Interfaces/generalInfo";

const ProductGerenalInfo = (): any => {
  const [general, setgeneral] = useState<IGeneralInfo>(Object);
  const [render, setrender] = useState<boolean>(false);
  const [isLoading, setLoading] = useState<boolean>(false);

  const location: any = useLocation();
  let generalInfo = useRef<Array<any>>([]);

  const changeHandler = (e: any) => {
    setgeneral({ ...general, [e.target.name]: e.target.value });
    console.log("general ", general);
  };

  useEffect(() => {

    let prod_id = location.state.product_id;
    console.log(typeof prod_id, prod_id)
    generalInformation.getGeneralInfo(prod_id)
      .then((response: any) => {
        console.log("getGeneralInfo", response)
        const data: Array<any> = response.data;
        generalInfo.current = data;
        console.log("generalInfo.current", generalInfo.current)
        setLoading(true)
      }).catch((error: any) => {

      })
  }, [location, render]);

  const addGeneralInfo = () => {
    let prod_id = location.state.product_id
    generalInformation.createGeneralInfo(general, prod_id)
      .then((response: any) => {
        console.log("response", response.data)
        if (response.data != undefined && response.data != "") {
          setrender(true)
        }
      }).catch((error: any) => {
      })
  }

  const editGerenalInfo = () => {
    let prod_id = location.state.product_id
    generalInformation.updateGeneralInfo(general, prod_id)
      .then((response: any) => {
        console.log("response", response.data)
      }).catch((error: any) => {
      })
  }


  return (
    <>
      {(isLoading) ?

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
          {location.pathname == "/view" ? "" : (generalInfo.current.length > 0 ? <button className='next' onClick={editGerenalInfo}>Edit Information</button> : <button className='next' onClick={addGeneralInfo}>Add Information</button>)}
        </div>
        : ""}

    </>
  );
};

export default ProductGerenalInfo;
