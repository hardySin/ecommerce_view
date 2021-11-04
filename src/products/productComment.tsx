import "../css/productComment.css";
import { useState } from "react";

import { Rating } from 'primereact/rating';

const Comments = (): any => {
    const [val2, setVal2] = useState<any>();

  return (
    <>

<div className="d-flex align-items-center justify-content-center">
  <div className="container">
    <div className="row justify-content-center mb-4">
      <div className="col-lg-8">
        <h5>2 Reviews</h5>
      </div>
    </div>
    <div className="row justify-content-center mb-4">
      <div className="col-lg-8">
        <div className="comments">
          <div className="comment d-flex mb-4">
            <div className="flex-shrink-0">
              <div className="avatar avatar-sm rounded-circle">
                <img className="avatar-img" src="https://uifaces.co/our-content/donated/AW-rdWlG.jpg" alt=""/>
              </div>
            </div>
            <div className="flex-grow-1 ms-2 ms-sm-3">
              <div className="comment-meta d-flex align-items-baseline">
                <h6 className="me-2">Jordan Singer</h6>
                <span className="text-muted">2d</span>
                <Rating  className="rating" value={val2} cancel={false} onChange={(e) => setVal2(e.value)} />

              </div>
              <div className="comment-body">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Non minima ipsum at amet doloremque qui magni, placeat deserunt pariatur itaque laudantium impedit aliquam eligendi repellendus excepturi quibusdam nobis esse accusantium.
              </div>
              </div>
          </div>
         </div>
      </div>
    </div>
   </div>
</div>
     </>
  );
};

export default Comments;
