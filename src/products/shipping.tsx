import React, { useState, useRef } from 'react';
import '../css/Shipping.css'

declare module 'react' {
    interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
      // extends React's HTMLAttributes
      custom?: string;
    }
  }
const Shipping = () => {
    
    
    return (
       <>
       <div className="container4">
  <h1>Shipping</h1>
  <p>Please enter your shipping details.</p>
  <hr />
  <div className="form">
    
  <div className="fields fields--2">
    <label className="field">
      <span className="field__label"  >First name</span>
      <input className="field__input" type="text" id="firstname" value="John" />
    </label>
    <label className="field">
      <span className="field__label" >Last name</span>
      <input className="field__input" type="text" id="lastname" value="Doe" />
    </label>
  </div>
  <label className="field">
    <span className="field__label" >Address</span>
    <input className="field__input" type="text" id="address" />
  </label>

  <label className="field">
    <span className="field__label" >Street Name</span>
    <input className="field__input" type="text" id="address" />
  </label>


  <div className="fields fields--2">
    <label className="field">
      <span className="field__label"  >Landmark</span>
      <input className="field__input" type="text" id="firstname" value="John" />
    </label>
    <label className="field">
      <span className="field__label" >Moblie No.</span>
      <input className="field__input" type="text" id="lastname" value="Doe" />
    </label>
  </div>
 

  <div className="fields fields--2">
  <label className="field">
    <span className="field__label">Country</span>
    <select className="field__input" id="country">
      <option value=""></option>
      <option value="unitedstates">United States</option>
    </select>
  </label>

  <label className="field">
      <span className="field__label" >State</span>
      <select className="field__input" id="state">
        <option value=""></option>
      </select>
    </label>
  </div>
   <div className="fields fields--3">
    <label className="field">
      <span className="field__label" >Zip code</span>
      <input className="field__input" type="text" id="zipcode" />
    </label>
    <label className="field">
      <span className="field__label" >City</span>
      <input className="field__input" type="text" id="city" />
    </label>
 
    <label className="field">
      <span className="field__label" >Email ID</span>
      <input className="field__input" type="text" id="city" />
    </label>
    </div>
  </div>
  <hr></hr>
  <button className="next">Continue</button>
</div>

          </>
     );
}


export default Shipping;