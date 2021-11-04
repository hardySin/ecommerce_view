import "../../css/addproduct.css";
import React, { useRef, useState } from "react";
import { FileUpload } from "primereact/fileupload";
import { Col, Container, Row } from "react-bootstrap";
import wristwatch from "../images/wristwatch.jpg";
import { Image } from "primereact/image";
import { IProduct } from "../../Interfaces/product";

const ProductImages = (): any => {
  const [product, setProduct] = useState<IProduct>(Object);
  const fileUploadRef = useRef<any>(null);

  const changeHandler = (e: any) => {
    setProduct({ ...product, [e.target.name]: e.target.value });
    console.log("product ", product);
  };

  const uploadHandler = (e: any) => {
    console.log("onUpload ", e);
  };

  return (
    <>
      <FileUpload
        name="images"
        accept="image/*"
        customUpload={true}
        uploadHandler={uploadHandler}
        chooseLabel="Choose"
        maxFileSize={1000000}
        multiple
        emptyTemplate={
          <p className="p-m-0">Drag and drop files to here to upload.</p>
        }
      />

      <FileUpload
        name="demo[]"
        url="https://primefaces.org/primereact/showcase/upload.php"
        onUpload={uploadHandler}
        multiple
        accept="image/*"
        maxFileSize={1000000}
        emptyTemplate={
          <p className="p-m-0">Drag and drop files to here to upload.</p>
        }
      />

      {/* <div className="container4">
<Container>
<Row>
<Col>
<Image src={wristwatch} alt="Image" width="150"  />
</Col>
<Col>
<Image src={wristwatch} alt="Image" width="150"  />
</Col>
<Col>
<Image src={wristwatch} alt="Image" width="150"  />
</Col>
<Col>
<Image src={wristwatch} alt="Image" width="150"  />
</Col>
<Col>
<Image src={wristwatch} alt="Image" width="150"  />
</Col>

</Row>
</Container>
</div> */}
    </>
  );
};

export default ProductImages;
