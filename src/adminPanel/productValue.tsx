import "../css/addproduct.css";
import React, { useRef, useState } from "react";
import { Divider } from "primereact/divider";
import { FileUpload } from "primereact/fileupload";
import { Col, Container, Row } from "react-bootstrap";
import wristwatch from "../images/wristwatch.jpg";
import { Image } from "primereact/image";
import { IProduct } from "../Interfaces/product";
import { TabView, TabPanel } from 'primereact/tabview';
import Product from "./actionPages/product";
import ProductDescription from "./actionPages/productDescription";
import ProductImages from "./actionPages/productImages";
import ProductGerenalInfo from "./actionPages/productGerenalInfo";

const ProductValue = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
 
  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  return (
    <>
<div style={{padding:"2%"}}>
              <TabView>
                    <TabPanel header="Product">
                      <Product></Product>
                    </TabPanel>
                    <TabPanel header="Description">
                      <ProductDescription></ProductDescription>
                     </TabPanel>
                    <TabPanel header="Product Images">
                      <ProductImages></ProductImages>
                    </TabPanel>
                    <TabPanel header="General Information">
                      <ProductGerenalInfo></ProductGerenalInfo>
                    </TabPanel>

                </TabView>
                </div>
    </>
  );
};

export default ProductValue;
