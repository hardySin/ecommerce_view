import React, { useState,useEffect, useRef } from 'react';
import { Steps } from 'primereact/steps';
import 'primeicons/primeicons.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.css';
import 'primeflex/primeflex.css';
import Shipping from './shipping';
import Payment from './payment';
import Confirmation from './confirmation';
 
import AddtoCart from './addTocart';

const CheckOut = () => {
    const [activeIndex, setActiveIndex] = useState(0);
     const items = [
        {
            label: 'Shipping Info',
         },
        {
            label: 'Product Details',
         },
        {
            label: 'Payment',
         },
        {
            label: 'Confirmation',
         }
    ];

    let selectIndex=(index:number):any=>
    {
        setActiveIndex(index)
        console.log("index : " ,index)
        }


      let renderContent=():any=>
      {

      switch (activeIndex)  
{   
    case 0: 
         return(<><Shipping></Shipping></>) 
         break;  
     case 1:  
         return(<><AddtoCart></AddtoCart></>) 
         break;  
     case 2:  
         return(<><Payment></Payment></>) 
          break;  
     case 3:  
         return(<><Confirmation></Confirmation></>) 
          break;  
      default:  
     }  
}

useEffect(()=>
{
      console.log("asasd");
},[activeIndex])
    return (
       <>
           <div className="steps-demo" style={{color: 'white', margin:50}}>
                   <Steps model={items} activeIndex={activeIndex} onSelect={(e) =>selectIndex(e.index) } readOnly={false} />
                  {renderContent()} 
          </div>
         </>
     );
}


export default CheckOut;