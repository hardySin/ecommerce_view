import '../css/banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Carousel from 'react-bootstrap/Carousel';

import React, { useState, useEffect } from 'react';
import { Button } from 'primereact/button';
import companyLogo from '../images/logo-white.jpg';
import userIcon from '../images/user.jpg';
import shoe from '../images/shoe.png';
import women from '../images/women.png';

import banner from '../images/banner.png';
import banner2 from '../images/banner2.png';

import { IProduct } from '../Interfaces/product';

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      custom?: string;
    }
  }
   

 const Banner=():any=> {
  const [products, setProducts] = useState<any[]>([
       {
        name: 'Gabriel Rufino',
      price: 'contato@gabrielrufino.com',
      description: "this good one",
      image:"https://static.wikia.nocookie.net/muc/images/f/f6/Dora_the_Explorer.png/revision/latest?cb=20180315203942" 
    },
    {
      name: 'Gabriel Rufino',
    price: 'contato@gabrielrufino.com',
    description: "this good one",
    image:"https://static.wikia.nocookie.net/muc/images/f/f6/Dora_the_Explorer.png/revision/latest?cb=20180315203942" 
  },
  {
    name: 'Gabriel Rufino',
  price: 'contato@gabrielrufino.com',
  description: "this good one",
  image:"https://static.wikia.nocookie.net/muc/images/f/f6/Dora_the_Explorer.png/revision/latest?cb=20180315203942" 
  }
     ]);
 
    return (    
      <>
  

  <Carousel fade>
  <Carousel.Item>
  <div className="banner-container">
      <div className="banner">
          <div className="shoe">
              <img src={shoe} alt=""></img>
          </div>
          <div className="content">
              <span>upto</span>
              <h3>50% 0ff</h3>
              <p>offer ends after 5 days</p>
              <a href="#" className="btn">View Offer</a>
          </div>
          <div className="women">
              <img src={women} alt=""></img>
          </div>
        </div>
      </div>
   </Carousel.Item>

   <Carousel.Item>
  <div className="banner-container">
      <div className="banner">
          <div className="shoe">
              <img src={shoe} alt=""></img>
          </div>
          <div className="content">
              <span>upto</span>
              <h3>50% 0ff</h3>
              <p>offer ends after 5 days</p>
              <a href="#" className="btn">View Offer</a>
          </div>
          <div className="women">
              <img src={women} alt=""></img>
          </div>
        </div>
      </div>
   </Carousel.Item>
  

   <Carousel.Item>
  <div className="banner-container">
      <div className="banner">
          <div className="shoe">
              <img src={shoe} alt=""></img>
          </div>
          <div className="content">
              <span>upto</span>
              <h3>50% 0ff</h3>
              <p>offer ends after 5 days</p>
              <a href="#" className="btn">View Offer</a>
          </div>
          <div className="women">
              <img src={women} alt=""></img>
          </div>
        </div>
      </div>
   </Carousel.Item>
  

   <Carousel.Item>
  <div className="banner-container">
      <div className="banner">
          <div className="shoe">
              <img src={shoe} alt=""></img>
          </div>
          <div className="content">
              <span>upto</span>
              <h3>50% 0ff</h3>
              <p>offer ends after 5 days</p>
              <a href="#" className="btn">View Offer</a>
          </div>
          <div className="women">
              <img src={women} alt=""></img>
          </div>
        </div>
      </div>
   </Carousel.Item>
  
  </Carousel>

      </>
     );
  }
  
  export default Banner;
  