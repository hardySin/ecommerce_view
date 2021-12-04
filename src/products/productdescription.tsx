import "../css/productdescription.css";
import "../scss/productInformation.scss";
import "../css/Shipping.css";
import React, { useState, useEffect } from "react";
import { DOMAttributes } from "react";
import item1 from "../images/item-4.jpg";
import item2 from "../images/item-7.jpg";
import wristwatch from "../images/wristwatch.jpg";
import ReactSlick from "react-slick";
import ReactImageMagnify from "react-image-magnify";
import { Accordion, AccordionTab } from "primereact/accordion";
import { Rating } from 'primereact/rating';
import Comments from "./productComment";
import { Divider } from 'primereact/divider';
import { useLocation } from "react-router-dom";
import productSerivce from "../services/productService";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}

const ProductDescription = (): any => {
  const [val2, setVal2] = useState<any>();
  const location: any = useLocation();
  const [isLoading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<any>(Object);
  const [image, setImage] = useState<any>();
  const [description, setDescription] = useState<any>();

  let images: any[] = [
    { name: "http://localhost:8080/uploads/" + image, vw: "1112w" },
    { name: "http://localhost:8080/uploads/" + image, vw: "1192w" },
    { name: "http://localhost:8080/uploads/" + image, vw: "1200w" },
  ];

  let settings: any = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    productSerivce.getProduct(location.state.product_id)
      .then((response: any) => {
        const data: Array<any> = response.data.result1[0];
        setProduct(data);
        setImage(response.data.result1[0].product_image_ids[0].productImage[0].filename)
        setDescription(response.data.result1[0].productDescription_id.productDescription)
        console.log(response.data.result1[0].product_image_ids[0].productImage[0].filename)
        console.log(response.data.result1[0].productDescription_id.productDescription)

        console.log("product", data)
      })
      .catch((error: any) => { });

  }, [isLoading]);


  let srcSet = (): string => {
    return images
      .map((image) => {
        return `${image.name} ${image.vw}`;
      })
      .join(", ");
  };

  const dataSource: any = [
    {
      srcSet: srcSet(),
      small: image,
      large: image,
    },
    {
      srcSet: srcSet(),
      small: image,
      large: image,
    },
  ];

  const items: any = [
    { label: "DESCRIPTION" },
    { label: "INFORMATION" },
    { label: "REVIEW" },
  ];

  return (
    <>
      <div className="container1">
        <div className="left-half">
          {/* <ReactSlick {...settings} >
 
    {dataSource.map((src:any ,index:any) => (
                    <div key={index}>  */}
          <ReactImageMagnify
            {...{
              smallImage: {
                alt: "Wristwatch by Versace",
                isFluidWidth: true,
                src: "http://localhost:8080/uploads/" + image,
                srcSet: srcSet(),
                sizes:
                  "(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px",
              },
              largeImage: {
                src: "http://localhost:8080/uploads/" + image,
                width: 1200,
                height: 2000,
              },
              enlargedImageContainerDimensions: {
                width: "200%",
                height: "100%",
              },
              // isHintEnabled: true,
              // hintTextMouse: "Click to Enlarge",
              // hintTextTouch: "Tap to Enlarge",
              // shouldHideHintAfterFirstActivation: false

              shouldUsePositiveSpaceLens: true,
              lensStyle: { backgroundColor: "rgba(0,0,0,.6)" },
            }}
          />
          {/* </div>
                ))}
              </ReactSlick>    */}
        </div>

        <div className="right-column">
          <div className="product-description">
            <span>Headphones</span>
            <h1>{product.productName}</h1>
            <p>
              {description}
            </p>
          </div>

          <div className="product-configuration">
            <div className="product-color">
              <span>Color</span>
            </div>
            <div className="cable-config">
              <span>Cable configuration</span>

              <div className="cable-choose">
                <button>Straight</button>
                <button>Coiled</button>
                <button>Long-coiled</button>
              </div>

              <a href="#">How to configurate your headphones</a>
            </div>
          </div>

          <div className="product-price">
            <span>148$</span>
            <a href="#" className="cart-btn">
              Buy Now
            </a>
            <a href="#" className="cart-btn">
              Add to cart
            </a>
          </div>
        </div>
      </div>

      <div className="description">
        <Accordion activeIndex={0}>
          <AccordionTab header="DESCRIPTION">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            </p>
          </AccordionTab>
          <AccordionTab header="INFORMATION">
            <table>
              <tbody>
                <tr>
                  <th>Weight</th>
                  <td>0.3 kg</td>
                </tr>
                <tr>
                  <th>Dimensions</th>
                  <td>50 × 60 cm</td>
                </tr>
              </tbody>
            </table>
          </AccordionTab>
          <AccordionTab header="REVIEWS">
            <div className="container4">

              <Comments></Comments>
              <Divider />

              <h1>Add a review</h1>
              <p>Your email address will not be published.</p>
              <Rating value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

              <hr />
              <div className="form">
                <div className="fields fields--2">
                  <label className="field">
                    <span className="field__label">First name</span>
                    <input
                      className="field__input"
                      type="text"
                      id="firstname"
                      value="John"
                    />
                  </label>
                  <label className="field">
                    <span className="field__label">Email ID</span>
                    <input
                      className="field__input"
                      type="text"
                      id="lastname"
                      value="Doe"
                    />
                  </label>
                </div>
                <label className="field">
                  <span className="field__label">Review</span>
                  <input className="field__input" type="text" id="address" />
                </label>

              </div>
              <hr></hr>
              <button className="next">Add Your Review</button>
            </div>

          </AccordionTab>
        </Accordion>
      </div>
    </>
  );
};

export default ProductDescription;
