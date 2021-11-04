import "../css/addTocart.css";

declare module "react" {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}

let AddCart = (): any => {
  return (
    <>
      <div className="containercart">
        <h1>Shopping Cart</h1>

        <div className="cart">
          <div className="products">
            <div className="product">
              <img src="shoes.jpg" />

              <div className="product-info">
                <h3 className="product-name">New Shoes</h3>

                <h4 className="product-price">₹ 1,000</h4>

                <h4 className="product-offer">50%</h4>

                <p className="product-quantity">
                  Qnt: <input value="1" name="" />
                </p>

                <p className="product-remove">
                  <i className="fa fa-trash" aria-hidden="true"></i>

                  <span className="remove">Remove</span>

                </p>
              </div>
            </div>

            
          </div>

          <div className="cart-total">
            <p>
              <span>Total Price</span>

              <span>₹ 3,000</span>
            </p>

            <p>
              <span>Number of Items</span>

              <span>2</span>
            </p>

            <p>
              <span>You Save</span>

              <span>₹ 1,000</span>
            </p>

            <a href="#">Proceed to Checkout</a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AddCart;
