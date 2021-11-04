import "../css/account.css";
import React, { useState, useCallback, useRef, useEffect } from "react";
import UserService from "../services/user";
import Storage from "../services/storage";

const CreateAccount = () => {
  let toggle = useRef<any>();
  let myform = useRef<any>();

  const [account, setAccount] = useState(Object);

  const changeHandler = (e: any) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
    console.log("account ", account);
  };

  const signup = useCallback(() => {
    UserService.createUser(account)
      .then((response: any) => {
        Storage.setItem("Token",response.data.token)
        myform.current.reset();
        console.log("response ", response);
      })
      .catch((error: any) => {
        console.log("error ", error);
      });
  }, [account]);

  useEffect(() => {}, []);
  const toggleForm = () => {
    toggle.current.classList.toggle("active");
  };

  return (
    <>
      <body>
        <section>
          <div className="container" ref={toggle}>
            <div className="user signinBx">
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img1.jpg"
                  alt=""
                />
              </div>
              <div className="formBx">
                <form ref={myform}>
                  <h2>Forget Password</h2>
                  <input type="text" name="" placeholder="Username" />
                  <input type="password" name="" placeholder="Password" />
                  <input type="submit" name="" value="Send OTP" />
                  <p className="signup">
                    Don't have an account ?
                    <a href="#" onClick={() => toggleForm()}>
                      Sign Up.
                    </a>
                  </p>
                </form>
              </div>
            </div>
            <div className="user signupBx">
              <div className="formBx">
                <form ref={myform}>
                  <h2>Create an account</h2>
                  <input
                    type="text"
                    name="username"
                    onChange={changeHandler}
                    placeholder="Username"
                  />
                  <input
                    type="email"
                    name="useremail"
                    onChange={changeHandler}
                    placeholder="Email Address"
                  />
                  <input
                    type="password"
                    name="password"
                    onChange={changeHandler}
                    placeholder="Create Password"
                  />
                  <input type="password" placeholder="Confirm Password" />
                  <input
                    type="button"
                    value="Sign Up"
                    onClick={() => signup()}
                  />
                  <p className="signup">
                    Are you Forget Your Password ?
                    <a href="#" onClick={() => toggleForm()}>
                      Forget Password.
                    </a>
                  </p>
                </form>
              </div>
              <div className="imgBx">
                <img
                  src="https://raw.githubusercontent.com/WoojinFive/CSS_Playground/master/Responsive%20Login%20and%20Registration%20Form/img2.jpg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </section>
      </body>
    </>
  );
};

export default CreateAccount;
