import '../css/custom.css'
import React, { useState, useEffect } from 'react';
import productSerivce from "../services/productService";

declare module 'react' {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		// extends React's HTMLAttributes
		custom?: string;
	}
}
const ViewProducts = (): any => {

	const [isLoading, setLoading] = useState<boolean>(false);
	const [product, setProduct] = useState<any[]>([]);

	useEffect(() => {
		productSerivce.getAllProducts()
			.then((response: any) => {
				const data: Array<any> = response.data;
				setProduct(data);
			})
			.catch((error: any) => { });

	}, [isLoading]);

	return (
		<>
			<div className="main-rightlist">

				<div className="searchlist-items">

					<div id="itemlist" className="row view-group">
						{
							product.map((item) => {
								let snap = item.product_image_ids[0].productImage[0].filename;
								return (
									<>
										<div className="item col-sm-6 col-lg-3  text-center mycol-6">
											<div className="itemlist-text">
												<a href="#">
													<div className="img-event"> <img className="group list-group-image img-fluid" src={"http://localhost:8080/uploads/" + snap} alt=""></img> </div>
													<div className="itemlist-text">
														<h3 className="itemname-title">{item.productName}-{item.productDescription_id.productDescription}</h3>
														<div className="item-price">₹1,399   <span>₹2,990</span></div>
														<div className="bue-text">VIEW</div>
														<div className="bue-text">ADD TO CART</div>
													</div>
												</a>
												<div className="wishlist-icon"><i className="las la-heart"></i></div>
											</div>
										</div>
									</>
								)
							})
						}
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
