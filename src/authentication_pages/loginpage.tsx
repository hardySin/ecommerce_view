import "../css/login.css";
import { Sidebar } from "primereact/sidebar";

import { useHistory } from "react-router-dom";

const LoginPage = (props: any) => {
  let history = useHistory<any>();

  const createAccount = () => {
    history.push("/createAccount");
  };

  return (
    <>
      <Sidebar
        style={{ width: "25em" }}
        visible={props.value}
        position="right"
        onHide={() => props.panel(false)}
      >
        <form>
          <div className="AppForm ">
            <div className=" d-flex justify-content-center align-items-center">
              <div className="AppFormLeft">
                <h1>Login</h1>
                <div className="form-group position-relative mb-4">
                  <input
                    type="text"
                    className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                    id="username"
                    placeholder="Username"
                  />
                  <i className="fa fa-user-o"></i>
                </div>
                <div className="form-group position-relative mb-4">
                  <input
                    type="password"
                    className="form-control border-top-0 border-right-0 border-left-0 rounded-0 shadow-none"
                    id="password"
                    placeholder="Password"
                  />
                  <i className="fa fa-key"></i>
                </div>
                <div className="row  mt-4 mb-4">
                  <div className="col-md-6">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="defaultCheck1"
                      />
                      <label className="form-check-label">Remember me</label>
                    </div>
                  </div>
                  <div className="col-md-6 text-right">
                    <a href="#" onClick={()=>{createAccount()}}>Forgot Password?</a>
                  </div>
                </div>

                <button className="btn btn-success btn-block shadow border-0 py-2 text-uppercase ">
                  Login
                </button>

                <p className="text-center mt-5">
                  Don't have an account?
                  <span onClick={createAccount}>Create your account</span>
                </p>
              </div>
            </div>
          </div>
        </form>
      </Sidebar>
    </>
  );
};

export default LoginPage;
