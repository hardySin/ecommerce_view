// import '../css/custom.css'
import companyLogo from '../images/logo-white.png';
import userIcon from '../images/user.png';
import Cards from '../images/cards.png';


declare module 'react' {
	interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
		// extends React's HTMLAttributes
		custom?: string;
	}
}
const Footer = (): any => {
	return (
		<>
			<footer>
				<div className="container">

					<div className="footer-bottom">

						<div className="row">

							<div className="col-lg-4">

								<div className="cont-details">

									<div className="main-logo"><a href="index.html">
										{/* <img src={companyLogo} alt=""></img> */}
										<span>SCRAP SCOOP</span></a></div>

									<ul className="mt30">
										<li><span><i className="las la-map-marker"></i></span> Coming Soon</li>
										<li><span><i className="las la-envelope"></i></span> <a href="#">Coming Soon</a></li>
										<hr></hr>
										<li><span><i className="las la-phone"></i></span>  <a href="#">Coming Soon</a>  <br></br>
											<a href="#">Coming Soon</a></li>

									</ul>
								</div>

							</div>

							<div className="col-lg-5 col-md-7">
								<h3>Helpful Links</h3>


								<div className="row">
									<div className="col-sm-6">
										<div className="foot-links">
											<p><a href="#">About Us</a></p>
											<p><a href="#">Privacy Policy</a></p>
											<p><a href="#">FAQs</a></p>
											<p><a href="#">Contact us</a></p>
											<p><a href="#">Help/enquiry</a></p>
											<p><a href="#">Payment & Shipping </a></p>
										</div>
									</div>

									<div className="col-sm-6">
										<div className="foot-links">
											<p><a href="#">Term &amp; conditions</a></p>
											<p><a href="#">Privacy Policy</a></p>
											<p><a href="#">FAQs</a></p>
											<p><a href="#">Contact us</a></p>
											<p><a href="#">Help/enquiry</a></p>
											<p><a href="#">Vision </a></p>
										</div>
									</div>

								</div>

							</div>

							<div className="col-lg-3 col-md-5">
								<h3>Our Newsletter</h3>
								<div className="footer-newsletter">
									<p>Sign up with your name and email to get fresh updates.</p>
									<form className="form-inline">

										<input type="text" className="form-control" placeholder="Your Name"></input>
										<input type="email" className="form-control" placeholder="Your Email"></input>
										<button type="submit" className="btn btn-submit">Submit</button>
									</form>
								</div>

							</div>



						</div>


						<div className="copyright">
							<div className="row">
								<div className="col-md-4">SCRAP SCOOP. © 2021 | All rights reserved.</div>

								<div className="col-md-5">
									<div className="social-icons text-center">
										<a href="#" target="_blank"><i className="lab la-facebook-f"></i></a>
										<a href="#" target="_blank"><i className="lab la-twitter"></i></a>
										<a href="#" target="_blank"><i className="lab la-linkedin-in"></i></a>
										<a href="#" target="_blank"><i className="lab la-instagram"></i></a>

									</div>
								</div>

								<div className="col-md-3"><img src={Cards} alt=""></img></div>

							</div>
						</div>

					</div>

				</div>



			</footer>

		</>
	);
}

export default Footer;
