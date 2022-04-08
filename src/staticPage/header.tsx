import '../css/custom.css'
import CartBreif from '../products/cartbreif';
import React, { useState, useEffect, useRef, MutableRefObject, RefObject } from 'react';
import LoginPage from '../authentication_pages/loginpage';

declare module 'react' {
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    // extends React's HTMLAttributes
    custom?: string;
  }
}
const Header = (): any => {

  const [visibleRight, setVisibleRight] = useState(false);
  const [loginVisible, setloginVisible] = useState(false);

  let getOverlayPanel = (_overlay: any): any => {
    setVisibleRight(_overlay)
  }

  let closeLogin = (_overlay: any): any => {
    setloginVisible(_overlay)
  }


  return (
    <>
      <CartBreif value={visibleRight} panel={getOverlayPanel}></CartBreif>
      <LoginPage value={loginVisible} panel={closeLogin}></LoginPage>
      <header className="main-header">
        <div className="container">
          <div className="row align-items-center">

            <div className="col-lg-9 col-sm-6">
              <div className="main-logo"><a href="index.html">
                {/* <img src={companyLogo} alt=""></img> */}
                <span>SCRAP SCOOP</span></a>
                <button type="button" className="navbar-toggler" data-toggle="collapse" data-target=".navbar-collapse"><i className="las la-bars"></i></button>
              </div>

              <div className="top-search desktop-search">
                <form className="main-search-form" name="cform" method="post">
                  <div className="form-group">
                    <input type="text" className="form-control" name="name" id="name" placeholder="Search for products, brands and more" ></input>
                  </div>
                  <button type="submit" className="search-ico"><i className="la la-search"></i></button>
                </form>
              </div>

            </div>

            <div className="col-lg-3 col-sm-6">

              <div className="top-noti-user">
                <div className="top-notify" ><a href="#"><i onClick={() => setVisibleRight(true)} className="las la-shopping-cart"></i><span>0</span></a></div>
                <div className="top-notify"><a href="#"><i onClick={() => setVisibleRight(true)} className="las la-heart"></i><span>0</span></a></div>
                <div className="top-user-profile">
                  <a href="#">
                    {/* <img src={userIcon} alt=""></img> */}
                    <p><small>Welcome</small> Hemant</p>	</a>
                </div>

                <div className="top-user-profile">
                  <p onClick={() => setloginVisible(true)} >Login</p>
                </div>

              </div>
            </div>

          </div>

        </div>
      </header>

    </>
  );
}

export default Header;
