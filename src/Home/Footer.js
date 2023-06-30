import React from "react";
import * as images from '../assets/images/Image';
 
const Footer=()=>{
    return(
        <>
      
        <footer className="footer footer-v1 ">
        <div className="content-block footer-main">
          <div className="container">
            <div className="row">
              <div className="col-md-4">
                <div className="footer-logo">
                  <img className="footer-img" src={images.logoblue} alt="image-description" />
                </div>
              </div>
              <div className="col-md-4">
                <div className="footer-nav inline-nav text-center">
                  <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="about">About</a></li>
                    <li><a href="contact">Contact</a></li>
                  </ul>
                </div>
              </div>
              <div className="col-md-4 text-right">
                <ul className="social-network with-text">
                  <li>
                    <a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-twitter" aria-hidden="true"></i> </a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i> </a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-pinterest" aria-hidden="true"></i> </a>
                  </li>
                  <li>
                    <a href="#"><i class="fa fa-dribbble" aria-hidden="true"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom text-center">
          <div className="container">
            <p>Colud10</p>
          </div>
        </div>
      </footer>
      <a href="#" class="section-scroll" id="scroll-to-top"><i class="fa fa-angle-up"></i></a>
        </>
    );
}
export default Footer;