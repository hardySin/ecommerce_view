import '../css/custom.css'
import { Messages } from 'primereact/messages';
import { Message } from 'primereact/message';
import React, { useEffect, useRef } from 'react';


const Confirmation = () => {
	const messages = useRef(null)as any;

	useEffect(()=>
	{
		messages.current.show({severity: 'success', summary: '', detail: 'Your Order Successfully Submit',sticky: true });
 	},[])
  
     return (
       <>
 <Messages ref={messages}></Messages>

<div className="main-wrapper" style={{margin:"4%"}}>	
  <div className="container">
	    
		  <div className="order-cart-sec">
			
			<div className="title-search"> 
		      <h1 className="sub-title">Order Details</h1> 
			</div>	 
				 
		    <div className="order-sumry">
			  <span style={{color:"black"}}><strong>Account Id:</strong> 73032</span>
			  <span style={{color:"black"}}><strong>Order Id:</strong> 73123</span>
			  <span style={{color:"black"}}><strong>Order Date:</strong>  Apr 22, 2020 8:32:10 AM </span>	
			</div>
			  
			<div className="order-info-col">
			  <div className="row">
				
				<div className="col-lg-4 col-md-6">
				  <div className="order-address-col">
					  <h5>Billing Address</h5>
					   <p><strong>Hemant.Sharma</strong></p>
					   <p>c8/450 Rohini Sec-8</p>
					   <p>Rohini Sector 8</p>
					   <p>Delhi, New Delhi 110085</p>
					   <p>India</p>
				  </div>  
				</div>
				  
				<div className="col-lg-4 col-md-6">
				  <div className="order-address-col">
					  <h5>Shipping Address</h5>
					   <p><strong>Hemant.Sharma</strong></p>
					   <p>c8/450 Rohini Sec-8</p>
					   <p>Rohini Sector 8</p>
					   <p>Delhi, New Delhi 110085</p>
					   <p>India</p>
				  </div>  
				</div>  
				  
				<div className="col-lg-4">
				  <div className="order-price-col">
					  <h5>Order Summary</h5>
					<dl className="commerce-list"> 
						<dt>Subtotal</dt> <dd className="text-right" style={{color:"black"}}>Rs 17,999.00</dd> 
						<dt>Delivery</dt> <dd className="text-right" style={{color:"black"}}>Rs 0.00</dd> 
						<dt>Tax</dt> <dd className="text-right" style={{color:"black"}}>Rs 0.00</dd> 
						<dt>Delivery Discount</dt> <dd className="text-right" style={{color:"black"}}>Rs 1,799.90</dd> 
						<dt></dt> <dd className="text-right" style={{color:"black"}}>10.00%</dd>
					   
					    <dt className="big2x">Total</dt> <dd className="big2x text-right"><strong style={{color:"black"}}>Rs 16,199.10</strong></dd>
					  
						 </dl>
						
				  </div>  
				</div>    
				
				</div>  
			</div>
            </div>
            </div>
            </div>
  
       </>
     );
}


export default Confirmation;