import React from "react";
import * as images from '../assets/images/Image';
const Contents=()=>{
    return(
        <>
        <section className="visual">
        <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img className="d-block w-100 " src= {images.Aboutimg4 } alt="First slide" />
 </div>
    <div className="carousel-caption d-none d-md-block">
       <h1  className="head-block">About us</h1>
        <h2 className="text-white">Time to enhance your web presence!</h2>
                <div className="breadcrumb-block" > 
                        <ol className="breadcrumb">
                          <li className="breadcrumb-item"><a href="/"> Home </a></li>
                          <li className="breadcrumb-item active"> About Company </li>
                        </ol> 
                     </div>                              
                    </div>
                  </div>
                 </div>
             </section>
                <div className="content-wrapper">
                    <section className="content-block">
                        <div className="container text-center">
                            <div className="heading bottom-space">
                                <h2>Dream. <span>Create.</span> Deliver</h2>
                            </div>
                            <div className="description">
                                <p>Get Ready to Change the Game with Colud10's Revolutionary Product Development Services!
                                </p>
                            </div>
                        </div>
                    </section>
                    <section className="content-block p-0">
                        <div className="container-fluid">
                            <div className="content-slot alternate-block">
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="bg-stretch img-wrap wow slideInLeft">
                                        <img src={images.Aboutimg5} alt="images"/>
                                        </div>
                                    </div>
                                <div className="col col-lg-6">
                                        <div className="text-wrap">
                                            <h3>Digital experts working for you.</h3>
                                            <p>At Colud10, we don't simply build products, we build solutions that transform the way the world operates.
                                            Our team of visionaries is dedicated to bringing your game-changing ideas to life with world-className hardware and software development, deployment, and manufacturing services.
                                            With a razor-sharp focus on innovation, we're committed to helping you optimize your product, make a powerful impact in your industry, and bring your brand to the forefront of the market. </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="bg-stretch img-wrap wow slideInRight">
                                            <img src={images.Aboutimg6} alt="images"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-wrap">
                                            <h3>OUR VISION & MISSION</h3>
                                            <p>Vision : Unleashing the Potential of Humanity
                                               Mission:To bring People’s Possibilities to Reality by Engineering Awesomeness</p>
                                            <p>We believe that every person has a unique power within them - a potential that is waiting to be unleashed. Our mission is to help individuals discover and unleash that power, so that together we can achieve great things.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6">
                                        <div className="bg-stretch img-wrap wow slideInLeft">
                                            <img src={images.Aboutimg7} alt="images"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="text-wrap">
                                        <h4>Consulting</h4>
                                          <p>
                                             Want to unleash your business's full potential? Look no further than our top-notch consulting services.
                                              We have helped countless clients from varying industries fulfil their objectives, thanks to our extensive knowledge and experience. 
                                              When it comes to guiding your business towards success, count on us we will deliver the results you are looking for.
                                            <ul className="point-remove">
                                              <li>Product Engineering</li>
                                              <li>UI/UX Design</li>
                                               <li>Enterprise IT Solutions</li>
                                             </ul>
                                            </p>
                                               <p>
                                                 Unlock Your Business's Potential with Our Team
                                                 Are you looking for the missing piece that can take your business to the next level? Look no further than our expert team of service providers.
                                                 With our extensive knowledge and experience, we can help your business reach new heights and unlock its full potential.
                                             <ul className="point-remove">
                                                <li>Dedicated Dev Team</li>
                                                 <li>Staff Augmentation</li> 
                                                <li>Project Outsource</li>
                                            </ul>
                                            <p>
                                            Front - End & Mobile Technologies
                                            </p>
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section className="content-block quotation-block black-overlay-6 parallax" data-stellar-background-ratio="0.55">
                        <div className="container">
                            <div className="inner-wrapper">
                                <h3 className="block-top-heading text-white">BEST EVER DESIGN</h3>
                                <h2 className="text-white">Time to enhance your web presence!</h2>
                                <div className="btn-container">
                                    <a href="#" className="btn btn-primary">GET QUOTATION</a>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
        </>
    );
}
export default Contents;