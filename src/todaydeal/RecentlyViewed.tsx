import { IProduct } from '../Interfaces/product';
import React, { useState, useEffect } from 'react';
import { Carousel } from 'primereact/carousel';
import '../css/custom.css'

import item1 from '../images/item-1.jpg';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';


const RecentlyView = (): any => {

  const [products, setProducts] = useState<any[]>([
    { "id": "1000", "code": "f230fh0g3", "name": "Bamboo Watch", "description": "Product Description", "image": { item1 }, "price": 65, "category": "Accessories", "quantity": 24, "inventoryStatus": "INSTOCK", "rating": 5 },
    { "id": "1001", "code": "nvklal433", "name": "Black Watch", "description": "Product Description", "image": { item1 }, "price": 72, "category": "Accessories", "quantity": 61, "inventoryStatus": "INSTOCK", "rating": 4 },
    { "id": "1002", "code": "zz21cz3c1", "name": "Blue Band", "description": "Product Description", "image": { item1 }, "price": 79, "category": "Fitness", "quantity": 2, "inventoryStatus": "LOWSTOCK", "rating": 3 },
    { "id": "1003", "code": "244wgerg2", "name": "Blue T-Shirt", "description": "Product Description", "image": { item1 }, "price": 29, "category": "Clothing", "quantity": 25, "inventoryStatus": "INSTOCK", "rating": 5 },
  ]);

  const productTemplate = () => {
    return (
      <>
        <a href="#">
          <div className="img-event"> <img className="group list-group-image img-fluid" src={item1} alt=""></img> </div>
          <div className="itemlist-text">
            <h3 className="itemname-title">Mobile Cables</h3>
            <div className="itemname-text">3-in-1 multifunction (micro USB+lightning+type C) cable</div>
            <div className="bue-text">Under ₹279 + Extra10% Off</div>
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
            <div className="deal-head"><h2>Recently Viewed</h2></div>
            <div className="view-link"><a href="#">View All</a></div>
          </div>

          <div id="related-slider" className=" top-deals">
            <div className="item">
              <div className="feature-item text-center">
                <Carousel value={products} numVisible={5} numScroll={3} itemTemplate={productTemplate} />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  );
}

export default RecentlyView;
