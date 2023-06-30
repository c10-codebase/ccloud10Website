import React from "react";
import * as images from '../assets/images/Image';
const Servises=()=>{
    return(
        <>
       {/*  <div id="carouselExampleSlidesOnly" className="carousel slide" data-ride="carousel" >
         <div className="carousel-inner">
          <div className="carousel-item active">
           <img className="digital-style " src= {images.Newimg3 } alt="First slide" />
        </div>
           <div className="carousel-caption d-none d-md-block">
              <h1><p className="text-black w-120 text-center">BLENDING STRATEGY , DESIGN AND INNOVATION</p></h1>
              <h2><p className="text-black w-120 text-center">Leveraging technology and innovation to transform your business.</p></h2>
             </div>
        </div>
      </div> */}
      <section className="serviceBannerWrapper sect-2">
        <div className="bannerOverlay" data-v-56d67de0 ></div>
        <div className="h-100 container">
          <div>
            <select>
            {/* <option value={{Digitaltransformation}}>Digitaltransformation</option> */}
            {/* <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option>
            <option value={{Digitaltransformation}}>Digitaltransformation</option> */}
            </select>
          </div>
          <div className="row h-100 align-items-center">
            <div className="col-md-12" id="bannerscene">
              {/* <h3 className="d-inline-block block_reveal_effect block_reveal_effect_delay_02dark">
                <div>
                  perfomanse ingineering
                  <span className="spansty">
                  <i class="fa fa-chevron-down" aria-hidden="true"></i>
                  </span>
                </div>
              </h3> */}
              <br/>
              <h1 className="d-inline-block block_reveal_effect dark">
                <div className="d-inline-block">
                <div className="d-inline-block">
                  <span className="text-serv-style">BLENDING</span>
                  <span className="textPrimary textUppercase">STRATEGY</span>
                  <span className="text-serv">,</span>
                  <span className="textPrimary textUppercase">DESIGN</span>
                  <br/>
                  <span className="text-serv-style">AND</span>
                  <span className="textPrimary textUppercase">INNOVATION</span>
                  <br/>
                  <h3 className="d-inline-block block_reveal_effect block_reveal_effect_delay_02 dark">
                    <div className="serv-ban">
                      Leveraging technology and innovation to transform your business
                    </div>
                  </h3>
                </div>
                </div>
              </h1>
            </div>
          </div>
        </div>
      </section>
      <div className="content-wrapper">
            <section className="content-block">
              <div className="container">
        <div className="row multiple-row v-align-row">
                   <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                      <div className="icon">
                      <img src={images.penlogo} className="vector-style"></img>
                        </div>
                        <h4 className="content-title"><a href="/Digitaltrans">DIGITAL TRANSFORMATION</a></h4>
                        <div className="des">
                           <p>                           
                           Digital Marketing<br/>
                           Digital Strategy                            
                           </p>
                           <div class="link-holder">
                          <a class="link-more" href="/Digitaltrans">LEARN MORE</a>
                        </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={images.vector} className="vector-style"></img>
                        </div>
                        <h4 className="content-title">
                          <a href="/Uxweb">
                            UI/UX & <br />
                            DESIGN
                          </a>
                        </h4>
                        <div className="des">
                          Mobile & Web Design <br/>
                           UX Strategy 
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Uxweb">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <img src={images.sds} className="style-sds"></img>
                        </div>
                        <h4 className="content-title"><a href="/Mobile">MOBILE <br/>
                         ENGINEERING</a></h4>
                        <div className="des">                         
                            Android Development<br/>
                             iOS Development
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Mobile">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-cogs" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="Technology">WEB TECHNOLOGY DEVELOPMENT</a></h4>
                        <div className="des">
                            e-Commerce Platforms
                          Custom Web Applications
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="Technology">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i className="fa fa-free-code-camp" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Innovation">INNOVATION TECHNOLOGY</a></h4>
                        <div className="des">                                                      
                             Machine Learning & AI<br/>
                             Internet of Things                         
                        </div>
                        <div className="link-holder">
                          <a className="link-more" href="/Innovation">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-ravelry" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Development">ENTERPRISE APP DEVELOPMENT</a></h4>
                        <div className="des">                                                  
                             point Of Sale<br/>                            
                             liBusiness Intelligence
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Development">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i className="fa fa-cloud" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Cloud">CLOUD<br/>
                        SERVICE
                        </a></h4>
                        <div className="des">                          
                          Private Cloud and Infrastructure <br/>                      
                          Cloud Hyper Automation Platform                         
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Cloud">LEARN MORE</a>
                        </div>

                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6">
                    <div className="col-wrap">
                      <div className="ico-box bg-gray-light has-radius-medium">
                        <div className="icon">
                        <i class="fa fa-check-circle" aria-hidden="true"></i>
                        </div>
                        <h4 className="content-title"><a href="/Engineering">PERFORMANCE ENGINEERING</a></h4>
                        <div className="des">                       
                          Quality assurance as a service<br/>
                               Optimization                           
                        </div>
                        <div class="link-holder">
                          <a class="link-more" href="/Engineering">LEARN MORE</a>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
        </div>
     </section>
   </div>
   <section className="knowOurStrategyWrapper sect-2">
    <div className="container">
      <div className="row align-items-center">
        <div className="col-md-7 order-md-1 order-2">
          <div>
            <div className="sectionFadedTitle animated fade-in-bottom serv-sty"></div>
            <div className="animated fade-in-bottom">
              <h2 className="wow fade-in-bottom">
                <span className="span-con">
                  "Our Digital TRANSFORMATION"
                  <br/>
                  "Consulting Approach"
                </span>
              </h2>
            </div>
          </div>
          <div className="animated fade-in-bottom serv-ani">
            <h4 className="wow fade-in-bottom strategySubcontent">
              "We don't just build, We perform. We build an innovative digital Strategy
              and deploy an agile proces that facilitates transprent and effective communication 
               to optimize digital transformation. See how we work"
            </h4>
          </div>
          <div className="animated fade-in-bottom serv-para">
            <a className="link-serv" href="#">
              <div className="customArrow pl-0 undfined ser-b">
                <button className="btn-serv position-relative button-link buttonlink btn-secondary d-flex pl-0 but-sty">
                  <div className="center custom_btn_front">
                    <div className="row align-items-center justify-content-center">
                      <div className="col">
                        <div className="d-inline-block blo-sty"> Our Approach</div>
                      </div>
                      <div className="col-auto pl-0">
                        <div className="d-inline-block astArrowWrapper buticon">
                          <div className="btn-arrow-wrapper">
                            <div className="customArrow">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            </a>
          </div>
        </div>
        <div className="col-sm-5 order-md-2 order-1">
          <div className="animated fadeIn serv-para">
            <div className="wow fadeIn">
              <div className="lazyload-wrapper">
                <img className="responsiveImg" src={images.roundimg} alt="servicestyle"></img>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
   </section>
   <div className="transform_section">
    <section className="{'mb-0':!showIndustriesSwiper} sect-2 ">
    <div className="transform_busines_wrapper">
      <div id="stars">
        <div id="title">
          <div>
            <div className="h-01">Have a Question? We're Happy to help</div>
            <a href="/contact" className="servcontact">
              <div className="customArrow pl-0 undefined servstyle-con">
              <button type="button" className="btn-serv position-relative button-link buttonlink btn-secondary butsty-1">
                        <div className="custom_btn_front">
                        <div className="row align-items-center justify-content-center">
                        <div className="col">
                        <div className="d-inline-block blo-sty-2">Contact Us</div>
                        </div>
                        <div className="col-auto pl-0">
                        <div className="d-inline-block astArrowWrapper buticon">
                        <div className="btn-arrow-wrapper">
                            <div className="customArrow">
                            <i class="fa fa-long-arrow-right" aria-hidden="true"></i>
                            </div>
                          </div>
                        </div>
                        </div>
                        </div>
                        </div>
                      </button>
                    
              </div>
            </a>
          </div>
          </div>      
      </div>
    </div>
    </section>
   </div>
                  
                
        </>
    );
}
export default Servises;