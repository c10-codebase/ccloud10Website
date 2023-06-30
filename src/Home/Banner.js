import React from "react";
import * as images from '../assets/images/Image';
import '../assets/pages/bannerPage.css';

const Banner=()=>{
  return(
    <>
       <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src= {images.big14} alt="First slide" />
      
    </div>
  <div className="carousel-caption d-none d-md-block">
    <h2><p className="text-white w-50 text-left">GRAPHICS. WEB. DIGITAL.</p></h2>
    <h1><p className="text-white">START-UP</p></h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim.</p>
</div>
</div>
</div>  
    </>

  );
}
export default Banner;
