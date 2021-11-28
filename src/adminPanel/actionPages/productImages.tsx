import "../../css/addproduct.css";
import React, { useRef, useState, useEffect, useCallback } from "react";
import { FileUpload } from "primereact/fileupload";
import { Col, Container, Row } from "react-bootstrap";
import wristwatch from "../images/wristwatch.jpg";
import { Image } from "primereact/image";
import { IProduct } from "../../Interfaces/product";
import { useLocation } from "react-router-dom";
import ProductImage from "../../services/ProductImage";
import Loader from "../../staticPage/loader";
const ProductImages = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
  const fileUploadRef = useRef<any>(null);
  let uploadurl: any;
  const location: any = useLocation();
  const [isLoading, setLoading] = useState<boolean>(false);
  let images = useRef<Array<any>>([]);
  let imageurl: Array<string> = [];

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  useEffect(() => {
    let prod_id = location.state.product_id;
    ProductImage.getProductImage(prod_id)
      .then((response: any) => {
        console.log("response", response.data)
        const data: Array<any> = response.data[0].product_image_ids;
        data.map((items: any, key: any) => {
          items.productImage.map((item2: any, key2: any) => {
            console.log("key item2", key2, item2.filename)
            imageurl.push(item2.filename)
          })
        })

        console.log("imageurl", imageurl)
        images.current = imageurl;
        setLoading(true)

      }).catch((error: any) => {
      })
  }, [location,]);

  const viewImage = () => {
    return (
      <div className="container4">
        <Container>
          <Row>
            {
              images.current.map((items: any, key: any) => {
                return (<Col key={key}> <Image src={"http://localhost:8080/uploads/" + items} alt="Image" width="150" /></Col>)
              }
              )}

          </Row>
        </Container>
      </div>
    )
  }

  const fileupload = () => {
    return (
      <FileUpload
        name="images"
        url={`http://localhost:8080/api/addProductImage?product_id=${location.state.product_id}`}
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="p-m-0">Drag and drop files to here to upload.</p>
        }
      />
    )
  }
  return (
    <>

      {(isLoading) ?
        (location.pathname == "/view"
          ?
          (images.current.length > 0) ? viewImage() : <h3>No Image Uploaded</h3>
          :
          <>
            {fileupload()}
            {(images.current.length > 0) ? viewImage() : <h3>No Image Uploaded</h3>}
          </>)
        : <Loader></Loader>}

    </>
  );
};


export default ProductImages;
