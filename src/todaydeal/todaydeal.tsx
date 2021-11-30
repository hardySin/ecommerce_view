import { IProduct } from '../Interfaces/product';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import item1 from '../images/item-1.jpg';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import productSerivce from "../services/productService";


const TodayDeal = (): any => {

  const [isLoading, setLoading] = useState<boolean>(false);
  const [product, setProduct] = useState<any[]>();


  useEffect(() => {

    productSerivce.getAllProducts()
      .then((response: any) => {
        const data: Array<any> = response.data;
        setProduct(data);
       })
      .catch((error: any) => { });

  }, [isLoading]);

  const productTemplate = (item:any) => {
    let snap=item.product_image_ids[0].productImage[0].filename;
    console.log("snap" ,snap)
     return (
      <>
         <a href="#">
          <div className="img-event"> <img className="group list-group-image img-fluid" src={"http://localhost:8080/uploads/" + snap } alt=""></img> </div>
          <div className="itemlist-text">
            <h3 className="itemname-title">{item.productName}</h3>
            <div className="itemname-text">{item.productDescription_id.productDescription}</div>
            <div className="bue-text">Under ₹279 + Extra {item.discount}% Off</div>
          </div>
        </a>
      </>
    );
  }

  return (
    <>
      <div className="main-wrapper">

        <div className="deals-col">
          <div className="deals-title">
            <div className="deal-head"><h2>Today's Deals</h2></div>
            <div className="view-link"><a href="#">View All</a></div>
          </div>

          <div id="related-slider" className=" top-deals">
            <div className="item">
              <div className="feature-item text-center">
                <Carousel value={product} numVisible={5} numScroll={3} itemTemplate={productTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default TodayDeal;
