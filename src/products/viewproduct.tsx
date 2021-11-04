import '../css/custom.css'
import item1 from '../images/item-7.jpg'

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      custom?: string;
    }
  }
const ViewProducts=():any=> {
    return (    
      <>
 	
 
     
      
	 <div className="main-rightlist"> 

   <div className="searchlist-items">

       <div id="itemlist" className="row view-group">
		  
        <div className="item col-sm-6 col-lg-3  text-center mycol-6">
          <div className="itemlist-text">
			<a href="#">
			 <div className="img-event"> <img className="group list-group-image img-fluid" src={item1} alt=""></img> </div>
			 <div className="itemlist-text">
				<h3 className="itemname-title">boAt Rockerz 255F Bluetooth Headset</h3>
				 <div className="item-price">₹1,399   <span>₹2,990</span></div>
				 <div className="bue-text">VIEW</div>
				 <div className="bue-text">ADD TO CART</div>

			  </div>
			  </a>
			  <div className="wishlist-icon"><i className="las la-heart"></i></div>
          </div>
        </div>
		  
		<div className="item col-sm-6 col-lg-3  text-center mycol-6">
          <div className="itemlist-text">
			<a href="#">
			 <div className="img-event"> <img className="group list-group-image img-fluid" src={item1} alt=""></img> </div>
			 <div className="itemlist-text">
				<h3 className="itemname-title">boAt Rockerz 255F Bluetooth Headset</h3>
				 <div className="item-price">₹1,399   <span>₹2,990</span></div>
				 <div className="bue-text">VIEW</div>
				 <div className="bue-text">ADD TO CART</div>

			  </div>
			  </a>
			  <div className="wishlist-icon"><i className="las la-heart"></i></div>
          </div>
        </div>
      
		<div className="item col-sm-6 col-lg-3  text-center mycol-6">
          <div className="itemlist-text">
			<a href="#">
			 <div className="img-event"> <img className="group list-group-image img-fluid" src={item1} alt=""></img> </div>
			 <div className="itemlist-text">
				<h3 className="itemname-title">boAt Rockerz 255F Bluetooth Headset</h3>
				 <div className="item-price">₹1,399   <span>₹2,990</span></div>
				 <div className="bue-text">VIEW</div>
				 <div className="bue-text">ADD TO CART</div>

			  </div>
			  </a>
			  <div className="wishlist-icon"><i className="las la-heart"></i></div>
          </div>
        </div>

        <div className="item col-sm-6 col-lg-3  text-center mycol-6">
          <div className="itemlist-text">
			<a href="#">
			 <div className="img-event"> <img className="group list-group-image img-fluid" src={item1} alt=""></img> </div>
			 <div className="itemlist-text">
				<h3 className="itemname-title">boAt Rockerz 255F Bluetooth Headset</h3>
				 <div className="item-price">₹1,399   <span>₹2,990</span></div>
				 <div className="bue-text">VIEW</div>
				 <div className="bue-text">ADD TO CART</div>

			  </div>
			  </a>
			  <div className="wishlist-icon"><i className="las la-heart"></i></div>
          </div>
        </div>
      </div>
    </div>
 	
    <div className="pagination-col">
      <ul className="pagination">
		<li className="page-item"><a className="page-link" href="#"><i className="las la-angle-left"></i></a></li>  
        <li className="page-item active"><a className="page-link" href="#">1</a></li>
        <li className="page-item"><a className="page-link" href="#">2</a></li>
        <li className="page-item"><a className="page-link" href="#">3</a></li>
        <li className="page-item"><a className="page-link" href="#">4</a></li>
        <li className="page-item"><a className="page-link" href="#">5</a></li>
		<li className="page-item"><a className="page-link" href="#">6</a></li>
		<li className="page-item"><a className="page-link" href="#">7</a></li>
		<li className="page-item"><a className="page-link" href="#">8</a></li>
		<li className="page-item"><a className="page-link" href="#">9</a></li>
		<li className="page-item"><a className="page-link" href="#">10</a></li>  
        <li className="page-item"><a className="page-link" href="#"><i className="las la-angle-right"></i></a></li>
      </ul>
  	 </div>
	  
  	 </div>
   
  
 
       </>
     );
  }
  
  export default ViewProducts;
  