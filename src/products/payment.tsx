import '../css/custom.css'
import card from '../images/card-icons.jpg'
import cvv from '../images/cvv-icon.jpg'
import safe from '../images/safe-icon.jpg'

 const Payment = () => {
     return (
       <>
 
<div className="main-wrapper" style={{margin:"4%"}}>	
  <div className="container">
	    
		  <div className="order-cart-sec">
			
			<div className="title-search"> 
		      <h1 className="sub-title">Order Payment</h1> 
			</div>	 
 			<div className="payment-sec">
			  <div className="row">
				
				<div className="col-md-8">
					
				  <div className="payment-carddetails">
					<h5>Card Details</h5>
					
					<form className="payment-form" style={{color:"black"}}><div className="row">
						
					<div className="col-sm-6">	
					  <div className="form-group">
						 <label>Name</label>
						 <input type="text" className="form-control" value=""/>
					  </div>  
					</div>
						
					<div className="col-sm-6">	
					  <div className="form-group">
						 <label>Email</label>
						 <input type="email" className="form-control" value=""/>
					  </div>  
					</div>
						
					<div className="col-sm-12">	
					   <div className="form-group">
						 <label>Card Number</label>
						 <input type="text" className="form-control w-50 d-inline-block" value=""/>
						 <span><img src={card} alt=""/></span>
					   </div>  
					 </div>
						
					<div className="col-sm-6">	
					  <div className="form-group card-exp">
						 <label>Card Expiry</label>
						 <input type="email" className="form-control" value=""/>
						 <input type="email" className="form-control" value=""/> 
					  </div>  
					</div>	
						
					<div className="col-sm-6">	
					   <div className="form-group">
						 <label>CVV</label>
						 <input type="text" className="form-control w-50 d-inline-block" value=""/>
						 <span><img src={cvv} alt=""/>(Last 3-4 digits)</span>
					   </div>  
					 </div>	
							
					  </div>
						
					<div className="cart-agree">By clicking the submit button you agree to our <a href="#">Terms of Service</a> & <a href="#">Privacy Policy</a></div>	
					
					<div className="common-box"><button type="submit" className="w-auto common-btn">Submit</button></div>	
						
					</form>  
					  
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
					   
					    <dt className="big2x">Total</dt> <dd className="big2x text-right" style={{color:"black"}}><strong >Rs 16,199.10</strong></dd>
					  
						 </dl>
						
				  </div> 
					
				  <div className="payment-terms white-col">
					<h5>Policies</h5>
					<p><a href="#">30 days refund policy.</a></p>
					<p><a href="#">Terms of Service</a></p>  
				  </div>
					
				  <div className="payment-queries white-col">
					  <h5>Billing Queries?</h5>
					  <p>Email support@itspares</p>
					  <p>Phone +91 xxxxx xxxxx</p>
				  </div>	
					
				  <div className="payment-safe white-col">
				    <img src={safe} alt=""/>
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


export default Payment;