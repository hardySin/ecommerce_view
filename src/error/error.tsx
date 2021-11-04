import "./error.scss";
import { Button } from 'primereact/button';
import {useHistory} from "react-router-dom";

const Error = (): any => {
  const history:any = useHistory();

  return (
    <>

<h1>Page Not Found</h1>
<p className="zoom-area">  </p>
<section className="error-container">
  <span className="four"><span className="screen-reader-text">4</span></span>
  <span className="zero"><span className="screen-reader-text">0</span></span>
  <span className="four"><span className="screen-reader-text">4</span></span>
</section>
<div className="link-container">
<Button  label="Back to Page"   onClick={() => history.goBack()} className="p-button-rounded p-button-help" />
</div>
     </>
  );
};

export default Error;
